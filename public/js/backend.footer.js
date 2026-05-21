jQuery(document).ready(function () {
    jQuery('.confirm-delete').click(function () {
        return confirm($(this).attr('data-sure_delete'));

    });

    let filterForm = $('#filterForm input.form-control, #filterForm select.form-control');
    filterForm.on( 'change', function () {
        this.form.submit();
    });

    let select2entities = jQuery('.select2entity');
    if (select2entities.length>0) {
        select2entities.select2entity(
            {
                language: {
                    inputTooShort: function (args) {
                        return "Legalább " + args.minimum + " karakter megadása szükséges.";
                    }
                }
            }
        );
    }
});

function escapeHtml(unsafe) {
    return unsafe.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
}

function copyToClipboard(content) {
    navigator.clipboard.writeText(content);
    event.target.innerHTML = "<i class='fa fa-check'></i>";
}

function showUniversalModalWithContent(title, body)
{
    let universalModal = $('#universalModal');
    universalModal.find('.modal-title').html(title);
    universalModal.find('.modal-body').html(body);
    universalModal.modal('show');

    return universalModal;
}

function showBlockContentPreviewPopup(blockId, blockCode, url, editUri) {
    $.ajax({
        url: url,
    }).done(function (data) {
        let hrefUri = (editUri !== '') ? ' <a href="' + editUri + '" target="_blank"><i class="fa fa-edit"></i></a>' : '';
        let copyIcon = ' <i onclick="copyToClipboard(document.getElementById(\'universalModal\').getElementsByClassName(\'modal-body\')[0].innerHTML)" class="fa fa-copy"></i> ';
        showUniversalModalWithContent("[block:"+blockCode+"]"+copyIcon+hrefUri, data);
    });
}

function deleteBlock(block, id) {
    var list = jQuery("#" + block + "-fields-list");
    var counter = list.data('widget-counter') || list.children().length;
    list.data('widget-counter', --counter);
    jQuery("#" + block + "block" + id).parent().remove();
}

// script for Block editor to create code/slug from block title
function blockCodeGenerator() {
    let block_code = document.getElementById("block_code");
    if (block_code !== null) {
        document.getElementById("block_code_help").innerText = "[block:" + block_code.value + "]";
        // prevent special characters
        $("#block_code").on('input', function () {
            var c = this.selectionStart,
                r = /[^_a-z0-9]/gi,
                v = $(this).val();
            if (r.test(v)) {
                $(this).val(v.replace(r, ''));
                c--;
            }
            this.setSelectionRange(c, c);
        });
        block_code.addEventListener('focus', function slugify() {
            if (block_code.value === "") {
                block_code.value = document.getElementById("block_title").value.toLowerCase()
                    .replace(/ /g, '').replace(/[-]+/g, '').replace(/[^\w-]+/g, '');
            }
            document.getElementById("block_code_help").innerText = "[block:" + block_code.value + "]";
        });
    }
}

blockCodeGenerator();

function universalSendAjaxRequestWithResultToastr(url, method="GET") {
    $.ajax({
        method: method,
        url: url,
        async: false,
    }).done(function (response) {
        toastr.success(response, {timeOut: 5000});
    }).fail(function (response) {
        toastr.error(response, {timeOut: 5000});
    }).always(function (response) {
    });

    return false;
}
