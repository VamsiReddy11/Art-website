/*! jQuery Validation Plugin v1.19.5
 * https://jqueryvalidation.org/
 * Copyright (c) 2022 Jörn Zaefferer */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}((function(t){const e=tc_jquery_validate_library_translation;t.extend(t.fn,{validate:function(e){if(this.length){var i=t.data(this[0],"validator");return i||(this.attr("novalidate","novalidate"),i=new t.validator(e,this[0]),t.data(this[0],"validator",i),i.settings.onsubmit&&(this.on("click.validate",":submit",(function(e){i.submitButton=e.currentTarget,t(this).hasClass("cancel")&&(i.cancelSubmit=!0),void 0!==t(this).attr("formnovalidate")&&(i.cancelSubmit=!0)})),this.on("submit.validate",(function(e){function s(){var s,n;return i.submitButton&&(i.settings.submitHandler||i.formSubmitted)&&(s=t("<input type='hidden'/>").attr("name",i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)),!(i.settings.submitHandler&&!i.settings.debug)||(n=i.settings.submitHandler.call(i,i.currentForm,e),s&&s.remove(),void 0!==n&&n)}return i.settings.debug&&e.preventDefault(),i.cancelSubmit?(i.cancelSubmit=!1,s()):i.form()?i.pendingRequest?(i.formSubmitted=!0,!1):s():(i.focusInvalid(),!1)}))),i)}e&&e.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing.")},valid:function(){var e,i,s;return t(this[0]).is("form")?e=this.validate().form():(s=[],e=!0,i=t(this[0].form).validate(),this.each((function(){(e=i.element(this)&&e)||(s=s.concat(i.errorList))})),i.errorList=s),e},rules:function(e,i){var s,n,r,a,o,l,h=this[0],d=void 0!==this.attr("contenteditable")&&"false"!==this.attr("contenteditable");if(null!=h&&(!h.form&&d&&(h.form=this.closest("form")[0],h.name=this.attr("name")),null!=h.form)){if(e)switch(n=(s=t.data(h.form,"validator").settings).rules,r=t.validator.staticRules(h),e){case"add":t.extend(r,t.validator.normalizeRule(i)),delete r.messages,n[h.name]=r,i.messages&&(s.messages[h.name]=t.extend(s.messages[h.name],i.messages));break;case"remove":return i?(l={},t.each(i.split(/\s/),(function(t,e){l[e]=r[e],delete r[e]})),l):(delete n[h.name],r)}return(a=t.validator.normalizeRules(t.extend({},t.validator.classRules(h),t.validator.attributeRules(h),t.validator.dataRules(h),t.validator.staticRules(h)),h)).required&&(o=a.required,delete a.required,a=t.extend({required:o},a)),a.remote&&(o=a.remote,delete a.remote,a=t.extend(a,{remote:o})),a}}});var i,s=function(t){return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")};t.extend(t.expr.pseudos||t.expr[":"],{blank:function(e){return!s(""+t(e).val())},filled:function(e){var i=t(e).val();return null!==i&&!!s(""+i)},unchecked:function(e){return!t(e).prop("checked")}}),t.validator=function(e,i){this.settings=t.extend(!0,{},t.validator.defaults,e),this.currentForm=i,this.init()},t.validator.format=function(e,i){return 1===arguments.length?function(){var i=t.makeArray(arguments);return i.unshift(e),t.validator.format.apply(this,i)}:(void 0===i||(arguments.length>2&&i.constructor!==Array&&(i=t.makeArray(arguments).slice(1)),i.constructor!==Array&&(i=[i]),t.each(i,(function(t,i){e=e.replace(new RegExp("\\{"+t+"\\}","g"),(function(){return i}))}))),e)},t.extend(t.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:t([]),errorLabelContainer:t([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(t){this.lastActive=t,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,t,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(t)))},onfocusout:function(t){this.checkable(t)||!(t.name in this.submitted)&&this.optional(t)||this.element(t)},onkeyup:function(e,i){9===i.which&&""===this.elementValue(e)||-1!==t.inArray(i.keyCode,[16,17,18,20,35,36,37,38,39,40,45,144,225])||(e.name in this.submitted||e.name in this.invalid)&&this.element(e)},onclick:function(t){t.name in this.submitted?this.element(t):t.parentNode.name in this.submitted&&this.element(t.parentNode)},highlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).addClass(i).removeClass(s):t(e).addClass(i).removeClass(s)},unhighlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).removeClass(i).addClass(s):t(e).removeClass(i).addClass(s)}},setDefaults:function(e){t.extend(t.validator.defaults,e)},messages:{required:e.required,remote:e.remote,email:e.email,url:e.url,date:e.date,dateISO:e.dateISO,number:e.number,digits:e.digits,equalTo:e.equalTo,maxlength:t.validator.format(e.maxlength),minlength:t.validator.format(e.minlength),rangelength:t.validator.format(e.rangelength),range:t.validator.format(e.range),max:t.validator.format(e.max),min:t.validator.format(e.min),step:t.validator.format(e.step)},autoCreateRanges:!1,prototype:{init:function(){this.labelContainer=t(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||t(this.currentForm),this.containers=t(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var e,i=this.currentForm,s=this.groups={};function n(e){var s=void 0!==t(this).attr("contenteditable")&&"false"!==t(this).attr("contenteditable");if(!this.form&&s&&(this.form=t(this).closest("form")[0],this.name=t(this).attr("name")),i===this.form){var n=t.data(this.form,"validator"),r="on"+e.type.replace(/^validate/,""),a=n.settings;a[r]&&!t(this).is(a.ignore)&&a[r].call(n,this,e)}}t.each(this.settings.groups,(function(e,i){"string"==typeof i&&(i=i.split(/\s/)),t.each(i,(function(t,i){s[i]=e}))})),e=this.settings.rules,t.each(e,(function(i,s){e[i]=t.validator.normalizeRule(s)})),t(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",n).on("click.validate","select, option, [type='radio'], [type='checkbox']",n),this.settings.invalidHandler&&t(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),t.extend(this.submitted,this.errorMap),this.invalid=t.extend({},this.errorMap),this.valid()||t(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var t=0,e=this.currentElements=this.elements();e[t];t++)this.check(e[t]);return this.valid()},element:function(e){var i,s,n=this.clean(e),r=this.validationTargetFor(n),a=this,o=!0;return void 0===r?delete this.invalid[n.name]:(this.prepareElement(r),this.currentElements=t(r),(s=this.groups[r.name])&&t.each(this.groups,(function(t,e){e===s&&t!==r.name&&(n=a.validationTargetFor(a.clean(a.findByName(t))))&&n.name in a.invalid&&(a.currentElements.push(n),o=a.check(n)&&o)})),i=!1!==this.check(r),o=o&&i,this.invalid[r.name]=!i,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),t(e).attr("aria-invalid",!i)),o},showErrors:function(e){if(e){var i=this;t.extend(this.errorMap,e),this.errorList=t.map(this.errorMap,(function(t,e){return{message:t,element:i.findByName(e)[0]}})),this.successList=t.grep(this.successList,(function(t){return!(t.name in e)}))}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){t.fn.resetForm&&t(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var e=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(e)},resetElements:function(t){var e;if(this.settings.unhighlight)for(e=0;t[e];e++)this.settings.unhighlight.call(this,t[e],this.settings.errorClass,""),this.findByName(t[e].name).removeClass(this.settings.validClass);else t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(t){var e,i=0;for(e in t)void 0!==t[e]&&null!==t[e]&&!1!==t[e]&&i++;return i},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(t){t.not(this.containers).text(""),this.addWrapper(t).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{t(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").trigger("focus").trigger("focusin")}catch(t){}},findLastActive:function(){var e=this.lastActive;return e&&1===t.grep(this.errorList,(function(t){return t.element.name===e.name})).length&&e},elements:function(){var e=this,i={};return t(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter((function(){var s=this.name||t(this).attr("name"),n=void 0!==t(this).attr("contenteditable")&&"false"!==t(this).attr("contenteditable");return!s&&e.settings.debug&&window.console&&console.error("%o has no name assigned",this),n&&(this.form=t(this).closest("form")[0],this.name=s),this.form===e.currentForm&&(!(s in i||!e.objectLength(t(this).rules()))&&(i[s]=!0,!0))}))},clean:function(e){return t(e)[0]},errors:function(){var e=this.settings.errorClass.split(" ").join(".");return t(this.settings.errorElement+"."+e,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=t([]),this.toHide=t([])},reset:function(){this.resetInternals(),this.currentElements=t([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(t){this.reset(),this.toHide=this.errorsFor(t)},elementValue:function(e){var i,s,n=t(e),r=e.type,a=void 0!==n.attr("contenteditable")&&"false"!==n.attr("contenteditable");return"radio"===r||"checkbox"===r?this.findByName(e.name).filter(":checked").val():"number"===r&&void 0!==e.validity?e.validity.badInput?"NaN":n.val():(i=a?n.text():n.val(),"file"===r?"C:\\fakepath\\"===i.substr(0,12)?i.substr(12):(s=i.lastIndexOf("index.html"))>=0||(s=i.lastIndexOf("\\"))>=0?i.substr(s+1):i:"string"==typeof i?i.replace(/\r/g,""):i)},check:function(e){e=this.validationTargetFor(this.clean(e));var i,s,n,r,a=t(e).rules(),o=t.map(a,(function(t,e){return e})).length,l=!1,h=this.elementValue(e);for(s in"function"==typeof a.normalizer?r=a.normalizer:"function"==typeof this.settings.normalizer&&(r=this.settings.normalizer),r&&(h=r.call(e,h),delete a.normalizer),a){n={method:s,parameters:a[s]};try{if("dependency-mismatch"===(i=t.validator.methods[s].call(this,h,e,n.parameters))&&1===o){l=!0;continue}if(l=!1,"pending"===i)return void(this.toHide=this.toHide.not(this.errorsFor(e)));if(!i)return this.formatAndAdd(e,n),!1}catch(t){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+e.id+", check the '"+n.method+"' method.",t),t instanceof TypeError&&(t.message+=".  Exception occurred when checking element "+e.id+", check the '"+n.method+"' method."),t}}if(!l)return this.objectLength(a)&&this.successList.push(e),!0},customDataMessage:function(e,i){return t(e).data("msg"+i.charAt(0).toUpperCase()+i.substring(1).toLowerCase())||t(e).data("msg")},customMessage:function(t,e){var i=this.settings.messages[t];return i&&(i.constructor===String?i:i[e])},findDefined:function(){for(var t=0;t<arguments.length;t++)if(void 0!==arguments[t])return arguments[t]},defaultMessage:function(e,i){"string"==typeof i&&(i={method:i});var s=this.findDefined(this.customMessage(e.name,i.method),this.customDataMessage(e,i.method),!this.settings.ignoreTitle&&e.title||void 0,t.validator.messages[i.method],"<strong>Warning: No message defined for "+e.name+"</strong>"),n=/\$?\{(\d+)\}/g;return"function"==typeof s?s=s.call(this,i.parameters,e):n.test(s)&&(s=t.validator.format(s.replace(n,"{$1}"),i.parameters)),s},formatAndAdd:function(t,e){var i=this.defaultMessage(t,e);this.errorList.push({message:i,element:t,method:e.method}),this.errorMap[t.name]=i,this.submitted[t.name]=i},addWrapper:function(t){return this.settings.wrapper&&(t=t.add(t.parent(this.settings.wrapper))),t},defaultShowErrors:function(){var t,e,i;for(t=0;this.errorList[t];t++)i=this.errorList[t],this.settings.highlight&&this.settings.highlight.call(this,i.element,this.settings.errorClass,this.settings.validClass),this.showLabel(i.element,i.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(t=0;this.successList[t];t++)this.showLabel(this.successList[t]);if(this.settings.unhighlight)for(t=0,e=this.validElements();e[t];t++)this.settings.unhighlight.call(this,e[t],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return t(this.errorList).map((function(){return this.element}))},showLabel:function(e,i){var s,n,r,a,o=this.errorsFor(e),l=this.idOrName(e),h=t(e).attr("aria-describedby");o.length?(o.removeClass(this.settings.validClass).addClass(this.settings.errorClass),o.html(i)):(s=o=t("<"+this.settings.errorElement+">").attr("id",l+"-error").addClass(this.settings.errorClass).html(i||""),this.settings.wrapper&&(s=o.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(s):this.settings.errorPlacement?this.settings.errorPlacement.call(this,s,t(e)):s.insertAfter(e),o.is("label")?o.attr("for",l):0===o.parents("label[for='"+this.escapeCssMeta(l)+"']").length&&(r=o.attr("id"),h?h.match(new RegExp("\\b"+this.escapeCssMeta(r)+"\\b"))||(h+=" "+r):h=r,t(e).attr("aria-describedby",h),(n=this.groups[e.name])&&(a=this,t.each(a.groups,(function(e,i){i===n&&t("[name='"+a.escapeCssMeta(e)+"']",a.currentForm).attr("aria-describedby",o.attr("id"))}))))),!i&&this.settings.success&&(o.text(""),"string"==typeof this.settings.success?o.addClass(this.settings.success):this.settings.success(o,e)),this.toShow=this.toShow.add(o)},errorsFor:function(e){var i=this.escapeCssMeta(this.idOrName(e)),s=t(e).attr("aria-describedby"),n="label[for='"+i+"'], label[for='"+i+"'] *";return s&&(n=n+", #"+this.escapeCssMeta(s).replace(/\s+/g,", #")),this.errors().filter(n)},escapeCssMeta:function(t){return void 0===t?"":t.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(t){return this.groups[t.name]||(this.checkable(t)?t.name:t.id||t.name)},validationTargetFor:function(e){return this.checkable(e)&&(e=this.findByName(e.name)),t(e).not(this.settings.ignore)[0]},checkable:function(t){return/radio|checkbox/i.test(t.type)},findByName:function(e){return t(this.currentForm).find("[name='"+this.escapeCssMeta(e)+"']")},getLength:function(e,i){switch(i.nodeName.toLowerCase()){case"select":return t("option:selected",i).length;case"input":if(this.checkable(i))return this.findByName(i.name).filter(":checked").length}return e.length},depend:function(t,e){return!this.dependTypes[typeof t]||this.dependTypes[typeof t](t,e)},dependTypes:{boolean:function(t){return t},string:function(e,i){return!!t(e,i.form).length},function:function(t,e){return t(e)}},optional:function(e){var i=this.elementValue(e);return!t.validator.methods.required.call(this,i,e)&&"dependency-mismatch"},startRequest:function(e){this.pending[e.name]||(this.pendingRequest++,t(e).addClass(this.settings.pendingClass),this.pending[e.name]=!0)},stopRequest:function(e,i){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[e.name],t(e).removeClass(this.settings.pendingClass),i&&0===this.pendingRequest&&this.formSubmitted&&this.form()&&0===this.pendingRequest?(t(this.currentForm).trigger("submit"),this.submitButton&&t("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!i&&0===this.pendingRequest&&this.formSubmitted&&(t(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(e,i){return i="string"==typeof i&&i||"remote",t.data(e,"previousValue")||t.data(e,"previousValue",{old:null,valid:!0,message:this.defaultMessage(e,{method:i})})},destroy:function(){this.resetForm(),t(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(e,i){e.constructor===String?this.classRuleSettings[e]=i:t.extend(this.classRuleSettings,e)},classRules:function(e){var i={},s=t(e).attr("class");return s&&t.each(s.split(" "),(function(){this in t.validator.classRuleSettings&&t.extend(i,t.validator.classRuleSettings[this])})),i},normalizeAttributeRule:function(t,e,i,s){/min|max|step/.test(i)&&(null===e||/number|range|text/.test(e))&&(s=Number(s),isNaN(s)&&(s=void 0)),s||0===s?t[i]=s:e===i&&"range"!==e&&(t["date"===e?"dateISO":i]=!0)},attributeRules:function(e){var i,s,n={},r=t(e),a=e.getAttribute("type");for(i in t.validator.methods)"required"===i?(""===(s=e.getAttribute(i))&&(s=!0),s=!!s):s=r.attr(i),this.normalizeAttributeRule(n,a,i,s);return n.maxlength&&/-1|2147483647|524288/.test(n.maxlength)&&delete n.maxlength,n},dataRules:function(e){var i,s,n={},r=t(e),a=e.getAttribute("type");for(i in t.validator.methods)""===(s=r.data("rule"+i.charAt(0).toUpperCase()+i.substring(1).toLowerCase()))&&(s=!0),this.normalizeAttributeRule(n,a,i,s);return n},staticRules:function(e){var i={},s=t.data(e.form,"validator");return s.settings.rules&&(i=t.validator.normalizeRule(s.settings.rules[e.name])||{}),i},normalizeRules:function(e,i){return t.each(e,(function(s,n){if(!1!==n){if(n.param||n.depends){var r=!0;switch(typeof n.depends){case"string":r=!!t(n.depends,i.form).length;break;case"function":r=n.depends.call(i,i)}r?e[s]=void 0===n.param||n.param:(t.data(i.form,"validator").resetElements(t(i)),delete e[s])}}else delete e[s]})),t.each(e,(function(t,s){e[t]="function"==typeof s&&"normalizer"!==t?s(i):s})),t.each(["minlength","maxlength"],(function(){e[this]&&(e[this]=Number(e[this]))})),t.each(["rangelength","range"],(function(){var t;e[this]&&(Array.isArray(e[this])?e[this]=[Number(e[this][0]),Number(e[this][1])]:"string"==typeof e[this]&&(t=e[this].replace(/[\[\]]/g,"").split(/[\s,]+/),e[this]=[Number(t[0]),Number(t[1])]))})),t.validator.autoCreateRanges&&(null!=e.min&&null!=e.max&&(e.range=[e.min,e.max],delete e.min,delete e.max),null!=e.minlength&&null!=e.maxlength&&(e.rangelength=[e.minlength,e.maxlength],delete e.minlength,delete e.maxlength)),e},normalizeRule:function(e){if("string"==typeof e){var i={};t.each(e.split(/\s/),(function(){i[this]=!0})),e=i}return e},addMethod:function(e,i,s){t.validator.methods[e]=i,t.validator.messages[e]=void 0!==s?s:t.validator.messages[e],i.length<3&&t.validator.addClassRules(e,t.validator.normalizeRule(e))},methods:{required:function(e,i,s){if(!this.depend(s,i))return"dependency-mismatch";if("select"===i.nodeName.toLowerCase()){var n=t(i).val();return n&&n.length>0}return this.checkable(i)?this.getLength(e,i)>0:null!=e&&e.length>0},email:function(t,e){return this.optional(e)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)},url:function(t,e){return this.optional(e)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(t)},date:(i=!1,function(t,e){return i||(i=!0,this.settings.debug&&window.console&&console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),this.optional(e)||!/Invalid|NaN/.test(new Date(t).toString())}),dateISO:function(t,e){return this.optional(e)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)},number:function(t,e){return this.optional(e)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)},digits:function(t,e){return this.optional(e)||/^\d+$/.test(t)},minlength:function(t,e,i){var s=Array.isArray(t)?t.length:this.getLength(t,e);return this.optional(e)||s>=i},maxlength:function(t,e,i){var s=Array.isArray(t)?t.length:this.getLength(t,e);return this.optional(e)||s<=i},rangelength:function(t,e,i){var s=Array.isArray(t)?t.length:this.getLength(t,e);return this.optional(e)||s>=i[0]&&s<=i[1]},min:function(t,e,i){return this.optional(e)||t>=i},max:function(t,e,i){return this.optional(e)||t<=i},range:function(t,e,i){return this.optional(e)||t>=i[0]&&t<=i[1]},step:function(e,i,s){var n,r=t(i).attr("type"),a="Step attribute on input type "+r+" is not supported.",o=new RegExp("\\b"+r+"\\b"),l=function(t){var e=(""+t).match(/(?:\.(\d+))?$/);return e&&e[1]?e[1].length:0},h=function(t){return Math.round(t*Math.pow(10,n))},d=!0;if(r&&!o.test(["text","number","range"].join()))throw new Error(a);return n=l(s),(l(e)>n||h(e)%h(s)!=0)&&(d=!1),this.optional(i)||d},equalTo:function(e,i,s){var n=t(s);return this.settings.onfocusout&&n.not(".validate-equalTo-blur").length&&n.addClass("validate-equalTo-blur").on("blur.validate-equalTo",(function(){t(i).valid()})),e===n.val()},remote:function(e,i,s,n){if(this.optional(i))return"dependency-mismatch";n="string"==typeof n&&n||"remote";var r,a,o,l=this.previousValue(i,n);return this.settings.messages[i.name]||(this.settings.messages[i.name]={}),l.originalMessage=l.originalMessage||this.settings.messages[i.name][n],this.settings.messages[i.name][n]=l.message,s="string"==typeof s&&{url:s}||s,o=t.param(t.extend({data:e},s.data)),l.old===o?l.valid:(l.old=o,r=this,this.startRequest(i),(a={})[i.name]=e,t.ajax(t.extend(!0,{mode:"abort",port:"validate"+i.name,dataType:"json",data:a,context:r.currentForm,success:function(t){var s,a,o,h=!0===t||"true"===t;r.settings.messages[i.name][n]=l.originalMessage,h?(o=r.formSubmitted,r.resetInternals(),r.toHide=r.errorsFor(i),r.formSubmitted=o,r.successList.push(i),r.invalid[i.name]=!1,r.showErrors()):(s={},a=t||r.defaultMessage(i,{method:n,parameters:e}),s[i.name]=l.message=a,r.invalid[i.name]=!0,r.showErrors(s)),l.valid=h,r.stopRequest(i,h)}},s)),"pending")}}});var n,r={};return t.ajaxPrefilter?t.ajaxPrefilter((function(t,e,i){var s=t.port;"abort"===t.mode&&(r[s]&&r[s].abort(),r[s]=i)})):(n=t.ajax,t.ajax=function(e){var i=("mode"in e?e:t.ajaxSettings).mode,s=("port"in e?e:t.ajaxSettings).port;return"abort"===i?(r[s]&&r[s].abort(),r[s]=n.apply(this,arguments),r[s]):n.apply(this,arguments)}),t}));
