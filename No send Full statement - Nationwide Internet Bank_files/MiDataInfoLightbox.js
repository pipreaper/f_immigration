/*!
* System: Aurora Internet Banking Platform
* Class:  Nationwide.Aurora.Transactions.Scripts.MiDataInfoLightbox
*
* Copyright (c) Nationwide Building Society 2014. All rights reserved.
*/
$(function(){var form=$("#midataInformationLightbox form"),checkboxDiv=$("#midataInformationLightbox div.confirmInformationRead");$("#midataInformationLightbox #lbBtnCancel").click(function(e){e.preventDefault();$.colorbox.close()});$("#midataInformationLightbox .btn-MidataAccept").click(function(e){e.preventDefault();$(this).closest("form").submit()});form.submit(function(){$(this).valid()&&$.colorbox.close()});$.extend(form.validate().settings,{showErrors:function(){this.defaultShowErrors();$.colorbox.resize()},highlight:function(element,errorClass,validClass){checkboxDiv.addClass("error")},unhighlight:function(element,errorClass,validClass){checkboxDiv.removeClass("error")}})})