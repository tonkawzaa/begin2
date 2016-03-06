'use strict';

app.form1 = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_form1
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_form1
(function(parent) {
    var form1Model = kendo.observable({
        fields: {
            birthday: '',
            username: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('form1Model', form1Model);
})(app.form1);

// START_CUSTOM_CODE_form1Model
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_form1Model