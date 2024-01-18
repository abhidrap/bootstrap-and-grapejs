const editor = grapesjs.init({
    container: '#gjs',
    fromElement: true,
    height: '300px',
    width: 'auto',
    storageManager: false,
    panels: { defaults: [] },
//............................................................
blockManager: {
    appendTo: '#blocks',
    blocks: [
      {
        id: 'section', // id is mandatory
        label: '<b>Section</b>', // You can use HTML/SVG inside labels
        attributes: { class:'gjs-block-section' },
        content: `<section>
          <h1>This is a simple title</h1>
          <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
        </section>`,
      }, {
        id: 'text',
        label: 'Text',
        content: '<div data-gjs-type="text">Insert your text here</div>',
      }, {
        id: 'image',
        label: 'Image',
        select: true,
        content: { type: 'image' },
        activate: true,
      }
    ]
  },
  });
  //.................................
  editor.BlockManager.add('my-block-id', {
    label: 'trees',
    category: 'custom block',
    activate: true,
    content : {
        tagname: "h2",
        content: "here is a tree",
    }
  });
  //....................................
  editor.BlockManager.add('my-block-id-1', {
    label: 'rivers',
    category: 'custom block',
    activate: true,
    content : {
        tagname: "h2",
        content: "here is a river",
    }
  });
  //.....................................
  editor.BlockManager.add('my-block-id-2', {
    label: 'mountain',
    category: 'custom block',
    activate: true,
    content : {
        tagname: "h2",
        content: "here is a mountain",
    }
  });
  //pannels
  editor.Panels.addPanel({
    id: 'panel-top',
    el: '.panel__top',
  });
  editor.Panels.addPanel({
    id: 'basic-actions',
    el: '.panel__basic-actions',
    buttons: [
      {
        id: 'visibility',
        active: true, // active by default
        className: 'btn-toggle-borders',
        label: '<u>B</u>',
        command: 'sw-visibility', // Built-in command
      }, {
        id: 'export',
        className: 'btn-open-export',
        label: 'Exp',
        command: 'export-template',
        context: 'export-template', // For grouping context of buttons from the same panel
      }, {
        id: 'show-json',
        className: 'btn-show-json',
        label: 'JSON',
        context: 'show-json',
        command(editor) {
          editor.Modal.setTitle('Components JSON')
            .setContent(`<textarea style="width:100%; height: 250px;">
              ${JSON.stringify(editor.getComponents())}
            </textarea>`)
            .open();
        },
      }
    ],
  });