'use strict';

/**
 * @ngdoc service
 * @name nashaLeptaApp.editorOptions
 * @description
 * # editorOptions
 * Constant in the nashaLeptaApp.
 */
angular.module('nashaLeptaApp')
  .constant('editorOptions', {
    "language": "ru",
    allowedContent: true,
    entities: false,
    extraPlugins:'autogrow,image2,youtube,justify,font,embed,find,iframe,' +
    'table,tableresize,tabletools,' +
    'clipboard,liststyle,selectall,uicolor,colorbutton,' +
    'lineutils,showblocks',
    autoGrow_onStartup:true
    ,
    toolbar: 'full',
    toolbar_full: [
      { name: 'base',
        items: [ 'Bold', 'Italic', 'Underline', 'ShowBlocks'] },
      { name: 'paragraph', items: [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote']},
      {name : 'support', items: [
        'JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock' ] },
      { name: 'editing', items: [ 'Find','Replace','-','SelectAll' ] },
      { name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },

      { name: 'clipboard', items: [ 'Cut','Copy','Paste', 'HorizontalRule']},
      { name: 'UnRe', items: [ 'Undo','Redo' ]},
      { name: 'styles', items: [ 'Styles','Font','Format', 'FontSize' ] },
      { name: 'styles', items: ['PasteText', 'PasteFromWord', 'RemoveFormat' ] },
      { name: 'colors', items : [ 'TextColor','BGColor' ] },
      { name: 'insert', items: [ 'Image', 'Table', 'SpecialChar' ] },
      { name: 'video', items: [ 'Youtube' ] },
      { name: 'others', items: [  'Source' ] },
      { name: 'tools', items: [ 'Maximize' ] }
    ]

  });
