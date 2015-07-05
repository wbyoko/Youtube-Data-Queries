module.exports = {};

var testAttr = function (key, q, webElem) {
  var value;

  if (q.query) 
    if (webElem)
      webElem = webElem.element(by.css(q.query));
    else
      webElem = element(by.css(q.query));

  // getText will be default if attr is not used
  // if (q.text) value = webElem.getText();

  if (q.attr) 
    value = webElem.getAttribute(q.attr);
  else 
    value = webElem.getText();

  if (q.regex) 
    value = value.then(function (str) {
      return (new RegExp(q.regex)).exec(str)[1];
    });

  expect(value).toBeTruthy();

  value.then(function (str) {
    console.log(key, str);
  });

  return value;
};

var testAttrs = module.exports.testAttrs = function (attrs, webElem) {
  return Object.keys(attrs).reduce(function (obj, key) {
      obj[key] = testAttr(key, attrs[key], webElem);
      return obj;
  }, {}); 
};

module.exports.testQueryList = function (q) {
  return function() {
    element.all(by.css(q.query)).then(function(items) {
      expect(items.length).toBeGreaterThan(0);
    });

    testAttrs(q.attrs, element(by.css(q.query)));    
  };
};