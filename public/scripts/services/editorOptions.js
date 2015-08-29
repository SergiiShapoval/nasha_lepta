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
    extraPlugins:'image2,youtube,justify,font,embed,find,iframe,' +
    'table,tableresize,tabletools,' +
    'clipboard,liststyle,selectall,uicolor,colorbutton,dialogui,dialog,' +
    'lineutils,showblocks,autolink,widget,widgetbootstrap,widgettemplatemenu',

    //allowedContent: 'p a div span h2 h3 h4 h5 h6 section article iframe object embed strong b i em cite pre blockquote small,' +
    //'sub sup code ul ol li dl dt dd table thead tbody th tr td img caption mediawrapper br[href,src,target,width,height,colspan,' +
    //'span,alt,name,title,class,id,data-options]{text-align,float,margin}(*);',

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
      { name: 'tools', items: [ 'Maximize' ] },
      { name: 'bootstrap', items: [ 'WidgetTemplateMenu' ] }

    ]

  });
