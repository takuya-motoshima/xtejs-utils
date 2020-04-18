import * as XtejsUtils from '../../dist/build.esm.js';

/**
 * Initialize image tool
 * 
 * @return {void}
 */
function setupImageTools() {
  $('[action-select-image]').on('click', async event => {
    const $currentItem = $(event.currentTarget);
    const $selectedItem = $('#stripContainer').find('.selected');
    if ($currentItem.is($selectedItem)) {
      return;
    }
    $selectedItem.removeClass('selected');
    $currentItem.addClass('selected');
    $mainImage.attr('src', $currentItem.find('img').attr('src'))
    updateResult();
  });
  $('[action-upload-image]').on('change', async event => {
    if (!event.currentTarget.files.length) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(event.currentTarget.files[0]);
    $mainImage
      .removeAttr('src')
      .attr('src', await new Promise(resolve => reader.onload = () => resolve(reader.result)))
      .on('load', updateResult);
  });
  $mainImage.attr('src', $('#stripContainer').find('.selected img').attr('src'));
}

/**
 * Initialize control
 * 
 * @return {void}
 */
function setupControl() {
  $('[action-change-objectfit]').on('change', async event => {
    $mainImage.css('object-fit', $(event.currentTarget).val());
    updateResult();
  });
  $mainImage.css('object-fit', $('#objectfit').val());
}

/**
 * Update image display area extraction result
 * 
 * @return {void}
 */
function updateResult() {
  const overlayRect = XtejsUtils.Graphics.getOverlayRect($mainImage.parent().get(0), $mainImage.get(0));
  const mediaDimensions = XtejsUtils.Graphics.getMediaDimensions($mainImage.get(0));
  $resultImage
    .attr({
      width: mediaDimensions.width,
      height: mediaDimensions.height
    })
    .css({
      left: overlayRect.x,
      top: overlayRect.y,
      width: overlayRect.width,
      height: overlayRect.height
    });
  const context = $resultImage.get(0).getContext('2d');
  context.clearRect(0, 0, $resultImage.attr('width'), $resultImage.attr('height'));
  context.drawImage($mainImage.get(0), 0, 0, mediaDimensions.width, mediaDimensions.height);
}

// Main procedure
const $mainImage = $('#mainImage');
const $resultImage = $('#resultImage');
setupImageTools();
setupControl();
updateResult();