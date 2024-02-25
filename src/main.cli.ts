#!/usr/bin/env node
import fs from 'node:fs/promises';
import { CLIApplication } from './cli/index.js';
import { Command } from './cli/commands/command.interface.js';

async function bootstrap (): Promise<void> {
  const cliApplication = new CLIApplication();
  const importedCommand: Command[] = [];
  const folderPath: string = './src/cli/commands';
  const commandsPath = await fs.readdir(folderPath, {encoding: 'utf8'});
  const filteredCommandsPath = commandsPath.filter((file) => file.includes('.command.'));

  for (const commandPath of filteredCommandsPath) {
    // eslint-disable-next-line node/no-unsupported-features/es-syntax
    const file = await import(`./cli/commands/${commandPath}`);

    for (const key of Object.keys(file)) {
      const exportFile = file[key];
      if (exportFile.prototype && typeof exportFile.prototype.execute === 'function') {
        const commandInterface = new exportFile();
        importedCommand.push(commandInterface);
      }
    }
  }

  cliApplication.registerCommands(importedCommand);

  cliApplication.processCommand(process.argv);
}

bootstrap();
