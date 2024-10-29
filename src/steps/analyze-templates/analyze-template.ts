import { AST } from '@codemod-utils/ast-template';

type Output = {
  lineNumbersForDynamicKeys: number[];
  staticKeys: string[];
};

export function analyzeTemplate(file: string): Output {
  const traverse = AST.traverse();

  const lineNumbersForDynamicKeys = new Set<number>();
  const staticKeys = new Set<string>();

  traverse(file, {
    MustacheStatement(node) {
      if (node.path.type !== 'PathExpression' || node.path.original !== 't') {
        return;
      }

      const { params } = node;

      if (params.length !== 1) {
        return;
      }

      const param = params[0]!;

      switch (param.type) {
        case 'PathExpression':
        case 'SubExpression': {
          lineNumbersForDynamicKeys.add(param.loc.start.line);

          break;
        }

        case 'StringLiteral': {
          staticKeys.add(param.value);

          break;
        }
      }
    },

    SubExpression(node) {
      if (node.path.type !== 'PathExpression' || node.path.original !== 't') {
        return;
      }

      const { params } = node;

      if (params.length !== 1) {
        return;
      }

      const param = params[0]!;

      switch (param.type) {
        case 'PathExpression':
        case 'SubExpression': {
          lineNumbersForDynamicKeys.add(param.loc.start.line);

          break;
        }

        case 'StringLiteral': {
          staticKeys.add(param.value);

          break;
        }
      }
    },
  });

  return {
    lineNumbersForDynamicKeys: Array.from(lineNumbersForDynamicKeys).sort(),
    staticKeys: Array.from(staticKeys).sort(),
  };
}
