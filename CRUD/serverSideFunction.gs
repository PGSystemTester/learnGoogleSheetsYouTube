function loadPartialHTML_(partial) {
  const htmlServ = HtmlService.createTemplateFromFile(partial);
  return htmlServ.evaluate().getContent();
}

function loadSearchView(){
  return loadPartialHTML_('search');;
}

function loadAddCustomersView(){ 
  return loadPartialHTML_('addcustomers');
}

function loadEditCustomersView(){ 
  return loadPartialHTML_('editcustomer');
}

function getDataForSearch() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Customers");
  return ws.getRange(2,1,ws.getLastRow()-1,3).getValues();
}
