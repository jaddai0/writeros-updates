writeros.tool.register({
  name: 'scene_check',
  description: 'Builds a focused revision checklist for a scene.',
  inputSchema: {
    type: 'object',
    properties: {
      scene: { type: 'string', description: 'The scene to examine.' },
      viewpoint: { type: 'string', description: 'The viewpoint character, if known.' }
    },
    required: ['scene']
  }
});

module.exports = {
  scene_check(args) {
    var scene = String(args.scene || '').trim();
    var viewpoint = String(args.viewpoint || 'the viewpoint character').trim();
    return {
      checklist: [
        'What changes between the opening and closing beat?',
        'What does ' + viewpoint + ' want in this scene?',
        'Which obstacle makes that want harder to reach?',
        'Where can exposition become action, choice, or conflict?',
        'Does the final beat create a clear reason to keep reading?'
      ],
      wordCount: scene ? scene.split(/\s+/).length : 0
    };
  }
};
