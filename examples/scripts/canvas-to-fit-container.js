import * as XtejsUtils from '../../dist/build.esm.js';

function setupSampleImageActions() {
  const $imageList = $('#imageList');
  $('#imagePicker')
    .on('click', '[action-select-image]', async ({ currentTarget }) => {
      const $current = $(currentTarget);
      const $selected = $imageList.find('.selected');
      if ($current.is($selected)) {
        return;
      }
      $selected.removeClass('selected');
      $current.addClass('selected');
      $sampleImage.attr('src', $current.find('img').attr('src'))
      updateResultImage();
    })
    .on('change', '[action-upload-image]', async ({ currentTarget }) => {
      const reader = new FileReader();
      reader.readAsDataURL(currentTarget.files[0]);
      const dataURL = await new Promise(resolve => reader.onload = () => resolve(reader.result));
      $sampleImage.attr('src', dataURL);
      if ($sampleImage.prop('complete')) {
        updateResultImage();
      } else {
        $sampleImage.on('load', () => updateResultImage())
      }
    });
  $sampleImage.attr('src', $imageList.find('.selected img').attr('src'));
  $sampleImage.css('object-fit', $('#objectFit').val());
}

function setupControllers() {
  $('body').on('change', '[action-change-object-fit]', async ({ currentTarget }) => {
    $sampleImage.css('object-fit', $(currentTarget).val());
    updateResultImage();
  });
}

function updateResultImage() {
  const rect = XtejsUtils.Graphics.getOverlayRect($sampleImage.parent().get(0), $sampleImage.get(0));
  const dimensions = XtejsUtils.Graphics.getMediaDimensions($sampleImage.get(0));
  $resultImage
    .attr({ width: dimensions.width, height: dimensions.height })
    .css({ left: rect.x, top: rect.y, width: rect.width, height: rect.height });
  const context = $resultImage.get(0).getContext('2d');
  context.clearRect(0, 0, $resultImage.attr('width'), $resultImage.attr('height'));
  context.drawImage($sampleImage.get(0), 0, 0, dimensions.width, dimensions.height);
}

const $sampleImage = $('#sampleImage');
const $resultImage = $('#resultImage');
setupSampleImageActions();
setupControllers();
updateResultImage();