(function() {
	//tinymce.PluginManager.requireLangPack('lineunbreaker');

	tinymce.create('tinymce.plugins.Lineunbreaker', {
		init : function(ed, url) {
			ed.addCommand('mceLineunbreak', function() {

				var content = ed.selection.getContent();
                var contentClean = content.replace(/(\r\n|\n|\r|<br\s*[\/]?>)/gim, function (match, p1, offset, original) {
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
				ed.selection.setContent(contentClean);
			});

			// Register button
			ed.addButton('lineunbreak', {
				title : 'Removes linebreaks from selected text',
				cmd : 'mceLineunbreak',
				image : url + '/img/lineunbreaker.gif',
			});

		},

		getInfo : function() {
			return {
				longname : 'Lineunbreaker',
				author : 'Andre Lohan',
				authorurl : 'http://wordpress.org/extend/plugins/lineunbreaker/',
				infourl : '',
				version : "1.3"
			};
		}
	});

	tinymce.PluginManager.add('lineunbreaker', tinymce.plugins.Lineunbreaker);
})();
