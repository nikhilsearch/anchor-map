function matchAndCountAnchors() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var insightsSheet = ss.getSheetByName("ANCHOR INSIGHTS");
  var internalAnchorsSheet = ss.getSheetByName("internal anchors");
 
  // Ensure the sheets exist
  if (!insightsSheet || !internalAnchorsSheet) {
    Logger.log("One of the sheets does not exist. Please check the names.");
    return;
  }
 
  // Adjust to only get ranges with data
  var insightsRange = insightsSheet.getRange("A2:A" + insightsSheet.getLastRow());
  var internalAnchorsRange = internalAnchorsSheet.getRange("B2:C" + internalAnchorsSheet.getLastRow());
 
  var insightsData = insightsRange.getValues();
  var internalAnchorsData = internalAnchorsRange.getValues();
 
  insightsData.forEach(function(row, index) {
    var url = row[0];
    var anchorCounts = {};
   
    // Count the anchor texts
    internalAnchorsData.forEach(function(anchorRow) {
      var anchorUrl = anchorRow[0];
      var anchorText = anchorRow[1];
     
      if (url === anchorUrl) {
        anchorCounts[anchorText] = anchorCounts[anchorText] ? anchorCounts[anchorText] + 1 : 1;
      }
    });
   
    // Convert anchorCounts object to an array and sort it by count in descending order
    var sortedAnchors = Object.keys(anchorCounts).map(function(key) {
      return [key, anchorCounts[key]];
    }).sort(function(first, second) {
      return second[1] - first[1]; // Sort by count in descending order
    });
   
    // Write the sorted results next to the URL in ANCHOR INSIGHTS
    var outputColumn = 2; // Start from column B
    sortedAnchors.forEach(function(anchor) {
      var anchorText = anchor[0];
      var count = anchor[1];
      insightsSheet.getRange(index + 2, outputColumn).setValue(anchorText);
      insightsSheet.getRange(index + 2, outputColumn + 1).setValue(count);
      outputColumn += 2; // Move to the next pair of columns for the next anchor
    });
  });
}


function matchAndCountAnchorsExternal() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var insightsSheet = ss.getSheetByName("EXTERNAL ANCHOR INSIGHTS");
  var internalAnchorsSheet = ss.getSheetByName("External Anchors");
 
  // Ensure the sheets exist
  if (!insightsSheet || !internalAnchorsSheet) {
    Logger.log("One of the sheets does not exist. Please check the names.");
    return;
  }
 
  // Adjust to only get ranges with data
  var insightsRange = insightsSheet.getRange("A2:A" + insightsSheet.getLastRow());
  var internalAnchorsRange = internalAnchorsSheet.getRange("B2:C" + internalAnchorsSheet.getLastRow());
 
  var insightsData = insightsRange.getValues();
  var internalAnchorsData = internalAnchorsRange.getValues();
 
  insightsData.forEach(function(row, index) {
    var url = row[0];
    var anchorCounts = {};
   
    // Count the anchor texts
    internalAnchorsData.forEach(function(anchorRow) {
      var anchorUrl = anchorRow[0];
      var anchorText = anchorRow[1];
     
      if (url === anchorUrl) {
        anchorCounts[anchorText] = anchorCounts[anchorText] ? anchorCounts[anchorText] + 1 : 1;
      }
    });
   
    // Convert anchorCounts object to an array and sort it by count in descending order
    var sortedAnchors = Object.keys(anchorCounts).map(function(key) {
      return [key, anchorCounts[key]];
    }).sort(function(first, second) {
      return second[1] - first[1]; // Sort by count in descending order
    });
   
    // Write the sorted results next to the URL in ANCHOR INSIGHTS
    var outputColumn = 2; // Start from column B
    sortedAnchors.forEach(function(anchor) {
      var anchorText = anchor[0];
      var count = anchor[1];
      insightsSheet.getRange(index + 2, outputColumn).setValue(anchorText);
      insightsSheet.getRange(index + 2, outputColumn + 1).setValue(count);
      outputColumn += 2; // Move to the next pair of columns for the next anchor
    });
  });
}







