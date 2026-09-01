writeros.tool.register({
  name: 'citation_check',
  description: 'Reports which common citation details are missing.',
  inputSchema: {
    type: 'object',
    properties: {
      author: { type: 'string' },
      title: { type: 'string' },
      publisher: { type: 'string' },
      year: { type: 'string' },
      url: { type: 'string' },
      accessed: { type: 'string' }
    }
  }
});

module.exports = {
  citation_check(args) {
    var fields = ['author', 'title', 'publisher', 'year'];
    if (args.url) fields.push('accessed');
    var missing = fields.filter(function (field) {
      return !String(args[field] || '').trim();
    });
    return {
      complete: missing.length === 0,
      missing: missing,
      note: 'Check the required order and punctuation against your chosen style guide.'
    };
  }
};
