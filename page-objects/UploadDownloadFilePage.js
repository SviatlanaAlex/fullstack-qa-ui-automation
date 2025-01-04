import { expect } from '@playwright/test';
import path from 'node:path';
import fs from 'fs';

export class UploadDownloadFilePage {
  constructor(page) {
    this.page = page;
    this.chooseFileButton = page.locator('#file-upload');
    this.uploadButton = page.getByRole('button', { name: 'Upload' });
    this.successMessage = page.getByText('File Uploaded!');
    this.uploadedFiles = page.locator('#uploaded-files');
    this.filesToDownload = page.locator('#content a');
  }

  async goToUpload() {
    await this.page.goto('/upload');
  }

  async goToDownload() {
    await this.page.goto('/download');
  }

  async uploadFile(filepath, filename) {
    const fileChooserPromise = this.page.waitForEvent('filechooser');

    await this.chooseFileButton.click();

    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(path.join(filepath, filename));

    await this.uploadButton.click();

    await this.successMessage.waitFor();
    await expect(await this.uploadedFiles).toHaveText(filename);
  }

  async downloadFile(filename) {
    const downloadPromise = this.page.waitForEvent('download');

    await this.filesToDownload.getByText(filename).click();
    const download = await downloadPromise;

    const filepath = './temp/' + download.suggestedFilename();
    await download.saveAs(filepath);

    await expect(fs.existsSync(filepath)).toBeTruthy();
  }
}
