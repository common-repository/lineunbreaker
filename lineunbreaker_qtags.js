QTags.addButton( 'lineunbreaker', '!br', lineunbreaker_qtags );
function lineunbreaker_qtags() {
	var ed = jQuery('#content');
	var len = ed.val().length;
	var start = ed[0].selectionStart;
	var end = ed[0].selectionEnd;
	var selectedContent = ed.val().substring(start, end);

    var contentClean = selectedContent.replace(/(\r\n|\n|\r|<br\s*[\/]?>)/gim, function (match, p1, offset, original) {
        var hasSpace = false;
        var hasHyphen = false;
        // Check if there is a space left side of match
        if (offset > 0) {
            var lftChar = original.charAt(offset - 1);
            if (lftChar === ' ') {
                hasSpace = true;
            }
            // Check for ascii hyphen and unicode hyphen
            if (lftChar === '-' || lftChar === '‐') {
                hasHyphen = true;
            }
        }
        if (offset < original.length - 1 - p1.length) {
            var rgtChar = original.charAt(offset + p1.length);
            if (rgtChar === ' ') {
                hasSpace = true;
            }
            // Check for hyphen
            if (rgtChar === '-' || rgtChar === '‐') {
                hasHyphen = true;
            }
        }

        return hasHyphen || hasSpace ? '' : ' ';
    });
	ed.val(ed.val().substring(0, start) + contentClean + ed.val().substring(end, len));
}
