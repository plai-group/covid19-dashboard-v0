(function(window, undefined) {
  var dictionary = {
    "ffdc37c3-4f35-4941-88d1-de2768a3e8f6": "Insights_advanced",
    "0641bb6c-14a0-4f07-bdca-a802cc5b7cc4": "Policy Options_advanced",
    "1582e421-6815-4884-bd07-bcd387d678a6": "Policy Options_basic",
    "643b2f37-782d-4375-b406-7ed489de06d7": "Results_basic",
    "3ea2f8e1-943b-475a-b042-9a377d435a62": "Compute_jobs",
    "56eb925f-d3b2-4f5b-99b9-4161f8a9d743": "Simulation Setup_advanced",
    "829efce9-60d8-4623-a234-8124393e7d30": "Results_advanced",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Simulation Setup_basic",
    "c381b5ca-c35d-4c1e-b388-6186811084aa": "Insights_basic",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);