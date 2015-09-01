CKEDITOR.plugins.add( 'widgettemplatemenu', {
    requires: 'menu',

    defaults : {
        name: 'accordion',
        count: 3,
        activePanel: 1,
        multiExpand: false
    },

    init: function( editor ) {

        // Set the default button info based on installed plugins
        var buttonData = {};
        // @todo: make these if statement work
        if (editor.plugins.widgetcommon != undefined) {
            buttonData.widgetcommonBox = 'Insert box';
            buttonData.widgetcommonQuotebox = 'Insert quote box';
        }
        if (editor.plugins.widgetbootstrap != undefined) {
            buttonData.widgetbootstrapLeftCol3 = '3-9 Фото слева';
            buttonData.widgetbootstrapLeftCol4 = '4-8 Фото слева';
            buttonData.widgetbootstrapLeftCol5 = '5-7 Фото слева';
            buttonData.widgetbootstrapVideoMiddle10 = '1-10-1 Видео по центру';
            buttonData.widgetbootstrapVideoMiddle8 = '2-8-2 Видео по центру ';
            buttonData.widgetbootstrapBigPhoto6 = '3-6-3 Фото по центру ';
            buttonData.widgetbootstrapBigPhoto8 = '2-8-2 Фото по центру ';
            buttonData.widgetbootstrapRightCol3 = '9-3 Фото справа';
            buttonData.widgetbootstrapRightCol4 = '8-4 Фото справа';
            buttonData.widgetbootstrapRightCol5 = '7-5 Фото справа';
            buttonData.widgetbootstrapTwoCol = 'Две колонки с фото';
            buttonData.widgetbootstrapThreeCol = 'Три колонки с фото';
            buttonData.widgetbootstrapAlert = 'Insert Alert box';
        }
        if (editor.commands.oembed != undefined) {
            buttonData.oembed = 'Insert media';
        }
        if (editor.commands.codeSnippet != undefined) {
            buttonData.codeSnippet = 'Insert code snippet';
        }
        if (editor.commands.leaflet != undefined) {
            buttonData.leaflet = 'Insert map';
        }

        // Get the enabled menu items from editor.config
        if (editor.config.widgettemplatemenuButtons != undefined) {
            var config = editor.config.widgettemplatemenuButtons.split(',');
            var buttons = {};
            for (var i = 0; i < config.length; i++) {
                buttons[config[i]] = buttonData[config[i]];
            }
        }
        else {
            var buttons = buttonData;
        }

        // Build the list of menu items
        var items =  {};
        for(var key in buttons) {
            items[key] = {
                label: buttons[key],
                command: key,
                group: 'widgettemplatemenu',
                icon: key
            }
        }

        // Items must belong to a group.
        editor.addMenuGroup( 'widgettemplatemenu' );
        editor.addMenuItems( items );

        editor.ui.add( 'WidgetTemplateMenu', CKEDITOR.UI_MENUBUTTON, {
            label: 'Insert Template',
            icon: this.path + 'icons/widgettemplatemenu.png' ,
            onMenu: function() {
                // You can control the state of your commands live, every time
                // the menu is opened.
                return {
                    widgetcommonBox: editor.commands.widgetcommonBox == undefined ? false : editor.commands.widgetcommonBox.state,
                    widgetcommonQuotebox: editor.commands.widgetcommonQuotebox == undefined ? false : editor.commands.widgetbootstrapLeftCol3.state,
                    widgetbootstrapLeftCol3: editor.commands.widgetbootstrapLeftCol3 == undefined ? false : editor.commands.widgetbootstrapLeftCol3.state,
                    widgetbootstrapLeftCol4: editor.commands.widgetbootstrapLeftCol4 == undefined ? false : editor.commands.widgetbootstrapLeftCol4.state,
                    widgetbootstrapLeftCol5: editor.commands.widgetbootstrapLeftCol5 == undefined ? false : editor.commands.widgetbootstrapLeftCol5.state,
                    widgetbootstrapRightCol3: editor.commands.widgetbootstrapRightCol3 == undefined ? false : editor.commands.widgetbootstrapRightCol3.state,
                    widgetbootstrapRightCol4: editor.commands.widgetbootstrapRightCol4 == undefined ? false : editor.commands.widgetbootstrapRightCol4.state,
                    widgetbootstrapRightCol5: editor.commands.widgetbootstrapRightCol5 == undefined ? false : editor.commands.widgetbootstrapRightCol5.state,
                    widgetbootstrapVideoMiddle10: editor.commands.widgetbootstrapVideoMiddle10 == undefined ? false : editor.commands.widgetbootstrapVideoMiddle10.state,
                    widgetbootstrapVideoMiddle8: editor.commands.widgetbootstrapVideoMiddle8 == undefined ? false : editor.commands.widgetbootstrapVideoMiddle8.state,
                    widgetbootstrapBigPhoto6: editor.commands.widgetbootstrapBigPhoto6 == undefined ? false : editor.commands.widgetbootstrapBigPhoto6.state,
                    widgetbootstrapBigPhoto8: editor.commands.widgetbootstrapBigPhoto8 == undefined ? false : editor.commands.widgetbootstrapBigPhoto8.state,
                    widgetbootstrapTwoCol: editor.commands.widgetbootstrapTwoCol == undefined ? false : editor.commands.widgetbootstrapTwoCol.state,
                    widgetbootstrapThreeCol: editor.commands.widgetbootstrapThreeCol == undefined ? false : editor.commands.widgetbootstrapThreeCol.state,
                    widgetbootstrapAlert: editor.commands.widgetbootstrapAlert == undefined ? false : editor.commands.widgetbootstrapAlert.state,
                    widgetbootstrapAccordion: editor.commands.widgetbootstrapAccordion == undefined ? false : editor.commands.widgetbootstrapAccordion.state,
                    oembed: editor.commands.oembed == undefined ? false : editor.commands.oembed.state,
                    codeSnippet: editor.commands.codeSnippet == undefined ? false : editor.commands.codeSnippet.state,
                    leaflet: editor.commands.leaflet == undefined ? false : editor.commands.leaflet.state,
                    FontAwesome: editor.commands.FontAwesome == undefined ? false : editor.commands.FontAwesome.state
                };
            }
        } );

    }


} );
