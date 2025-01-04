import {test} from '../fixtures/pages.fixture';

test('Upload and then download a file, and verify that both download and upload were successful', async ({uploadDownloadFilePage}) => {

    const filepath = './test-data';
    const filename = 'Document-new-unique.txt';

    await uploadDownloadFilePage.goToUpload();

    await uploadDownloadFilePage.uploadFile(filepath, filename);

    await uploadDownloadFilePage.goToDownload();

    await uploadDownloadFilePage.downloadFile(filename);

});