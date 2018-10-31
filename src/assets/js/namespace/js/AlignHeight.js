/**
 * 同じ行にある要素の高さを揃えます。
 * 複数の箇所で使用する場合は、`js-AlignHeight1`や`js-AlignHeight2`のように連番で指定してください。
 * https://github.com/appleple/responsive-auto-height
 * 例：
 * <div class="parent">
 *   <div class="child">
 *     <h2 class="js-AlignHeight1"></h2>
 *     <p class="js-AlignHeight2"></p>
 *   </div>
 *   <div class="child">
 *     <h2 class="js-AlignHeight1"></h2>
 *     <p class="js-AlignHeight2"></p>
 *   </div>
 * </div>
 */
import ResponsiveAutoHeight from 'responsive-auto-height';

export default function jsAlignHeight() {
  // 使用するクラス名。
  const baseName = 'js-AlignHeight';

  // `baseName`+1桁以上の連番。
  const regexp = new RegExp(`${baseName}[0-9]{1,}`);
  const allSelector = document.querySelectorAll(
    `[class*=${baseName}]`,
  );

  if (!allSelector.length) return;

  // 使用するクラス名だけを抽出する。
  const classNames = Array.from(allSelector).map(selector => selector.className.match(regexp)[0]);

  // 重複したクラス名を削除する。
  const target = classNames.filter(
    (className, i, self) => self.indexOf(className) === i,
  );

  // インスタンス化する。
  Array.from(target).forEach((className) => {
    let rah = className; // eslint-disable-line
    rah = new ResponsiveAutoHeight(`.${className}`);
  });
}
