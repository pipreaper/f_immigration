/*!
Copyright (c) Nationwide Building Society 2010. All rights reserved.
*/
$(function($){disableSubmitsOnClick($("#transferbutton"));$("#transferbutton").click(function(e){e.preventDefault();$("#quickTransferForm").submit()});var quickTransferForm=$("#quickTransferForm"),qtInitialHead=$("#qtInitialHead"),qtErrorHead=$("#qtErrorHead"),targetAccountList=$("#TargetAccount");$("#trans-amount").keydown(function(e){e.which==13&&(e.preventDefault(),quickTransferForm.submit())});$("#SourceAccount").change(function(e){var selectedAccountIndex=this.value,i=0,arr=[],toAccounts,len=0;if(toAccounts=selectedAccountIndex!=""?quickTransfer.targetAccount[selectedAccountIndex]:quickTransfer.targetAccount[-1],toAccounts!==undefined){for(len=toAccounts.length,targetAccountList.prop("disabled",selectedAccountIndex=="");i<len;i++)toAccounts[i]>=0?toAccounts[i]==$("#ToExternalAccountIndex").val()?jQuery.inArray($("#SourceAccount").val(),$("#EProductIndexes").val().replace(/,\s+/g,",").split(","))>=0&&parseInt($("#TotalCurrentAccounts").val())==0&&arr.push("<option value="+toAccounts[i]+">"+quickTransfer.allAccounts[toAccounts[i]]+"<\/option>"):arr.push("<option value="+toAccounts[i]+">"+quickTransfer.allAccounts[toAccounts[i]]+"<\/option>"):arr.push('<option value="">'+quickTransfer.allAccounts[toAccounts[i]]+"<\/option>");targetAccountList.empty().append(arr.join(""))}});$.extend(quickTransferForm.validate().settings,{highlightExtension:function(element){quickTransferForm.closest("div.widget").removeClass("widget-initial widget-tech-err").addClass("widget-err");qtErrorHead.show();qtInitialHead.hide()},unhighlightExtension:function(element){$("input.input-validation-error,select.input-validation-error",quickTransferForm).length==0&&(quickTransferForm.closest("div.widget").removeClass("widget-err").addClass("widget-initial"),qtErrorHead.hide(),qtInitialHead.show())}});quickTransferForm.submit(function(form){$(this).valid()&&quickTransferForm.closest("div.widget-content").block({message:null,overlayCSS:{opacity:.75,background:"#000","-moz-border-radius":"0 0 8px 8px","-webkit-border-bottom-left-radius":"8px","-webkit-border-bottom-right-radius":"8px","border-bottom-right-radius":"8px","border-bottom-left-radius":"8px"},onBlock:function(){$("#quickTransferInitial").find("div.processing-msg").show()}})});$("#anotherTransferButton").click(function(e){$("#quickTransferComplete").hide();$("#quickTransferInitial").show()});$("#SourceAccount").change()})