import * as XtejsUtils from '../../dist/build.esm.js';

function updateDateFormattedList(date) {
  $resultRows.each((_, tr) => {
    const $tr = $(tr);
    const format = $tr.children('[data-format]').data('format');
    const formatted  = XtejsUtils.Datetime.format(date, format);
    $tr.children('td:nth-child(2)').text(formatted);
  });
}

const $resultRows = $('#result').children('tr');
const $input = $('#input')
  .val(XtejsUtils.Datetime.format('YYYY-MM-DDTHH:mm'))
  .on('input', event => {
    updateDateFormattedList($(event.currentTarget).val());
  });

updateDateFormattedList($input.val());
