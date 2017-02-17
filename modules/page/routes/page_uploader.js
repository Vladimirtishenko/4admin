var formidable = require("formidable");
var fs = require('fs-extra');

module.exports.post = function(req, res, next) {
	var form = new formidable.IncomingForm();
	var funcCallback = req.query.CKEditorFuncNum;
    
    form.parse(req, function(err, fields, files) {});
 
    form.on('error', function(err) {
        console.error(err);
    });
 
    form.on('end', function(fields, files) {

        var temp_path = this.openedFiles[0].path;
        var file_name = this.openedFiles[0].name;
        var new_location = __approot + '/public/uploads/';

        fs.copy(temp_path, new_location + file_name, function(err) {  
            if (err) {
                console.error(err);
            } else {
                res.send('<script type="text/javascript">window.parent.CKEDITOR.tools.callFunction('+funcCallback+', "\/uploads\/' + file_name + '", "");</script>')
				
            }
        });
    });

}
