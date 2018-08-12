/**
 * Bind events to DOM nodes.
 *
 * This function is called one time for every paragraph of your plugin type
 * that was rendered. You can bind events to DOM here.
 *
 * @param {jQuery} $item - jQuery wrapper of the DOM element that belongs to the paragraph being rendered.
 * @param {Object} paragraph - paragraph of the wiki story.
 * @param {String} paragraph.id - paragraph's unique id.
 * @param {String} paragraph.text - paragraph's text.
 * @param {String} paragraph.type - paragraph's type, "example" in this case.
 */
function bind($item, paragraph) {
  $item.dblclick(function() {
    // We can use wiki API to reuse existent functionality
    // See https://github.com/fedwiki/wiki-client/blob/3e0a1dd499b5eb637eeb4a03970c9f0a4310e619/lib/wiki.coffee
    return window.wiki.textEditor($item, paragraph);
  });
}

/**
 * Renders content to the DOM.
 *
 * This function is called every time a paragraph of your plugin type is
 * rendered. You can render anything you need into the DOM.
 *
 * @param {jQuery} $item - jQuery wrapper of the DOM element that belongs to the paragraph being rendered.
 * @param {Object} paragraph - paragraph of the wiki story.
 * @param {String} paragraph.id - paragraph's unique id.
 * @param {String} paragraph.text - paragraph's text.
 * @param {String} paragraph.type - paragraph's type, "example" in this case.
 */
function emit($item, paragraph) {
  var keyword = $.trim(paragraph.text);

  $item
    .append('<strong>Random images (Example plugin)</strong><br>')
    .append('<small>Show random images with the keyword: ' + keyword + '</small>')
    .append('<hr>')
    .append('<img src="https://loremflickr.com/320/240/' + keyword + '" style="display:block;margin:0 auto">');
}

window.plugins.example = {
  bind: bind,
  emit: emit
};
