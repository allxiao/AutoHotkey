class AdHelper {
  constructor() {
    this.intervalId = null;
  }

  start() {
    this.stop();
    const _this = this;
    function group() {
      _this._sacrifice(2.0);
      _this._dimensionBoost();
      _this._antimatterGalaxies(2);
    }
    this.intervalId = setInterval(group, 500);
  }

  // 挑战 8 特别配置，不需要 Animator Galaxies，等 3 倍以上再 Sacrifice
  challenge8() {
    const _this = this;
    this.stop();
    function group() {
      _this._sacrifice(3.0);
      _this._dimensionBoost();
    }
    this.intervalId = setInterval(group, 500);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      console.log('停止检测');
    } else {
      console.log('没有检测在运行');
    }
  }

  _sacrifice(threshold = 2.0) {
    try {
      // 获取目标按钮元素
      const btn = document.querySelector('button.o-primary-btn--sacrifice');
      if (!btn) return;

      // 提取文本数值（正则匹配×后的数字）
      const text = btn.textContent;
      const match = text.match(/×(\d+\.\d+)/);
      if (!match) return;

      // 转换为浮点数并判断条件
      const value = parseFloat(match[1]);
      if (value >= threshold) {
        // 模拟按下点击这个按钮
        btn.click();
        console.log('[成功点击 Dimensional Sacrifice] 当前状态：', text);
      }
    } catch (e) {
      console.warn('检测异常：', e);
    }
  }


  _dimensionBoost() {
    try {
      // 定位目标按钮元素
      const button = document.querySelector('div.dimboost button.o-primary-btn--dimension-reset');

      // 检查元素是否存在且未被禁用
      if (!button || button.classList.contains('o-primary-btn--disabled')) return;

      // 检查按钮文本包含"unlock"关键词
      if (button.textContent.includes('unlock')) {
        button.click();
        console.log('[成功点击 Dimension Boost] 当前按钮状态:', button.textContent);
      }
    } catch (error) {
      console.error('[检测异常]', error);
    }
  }

  _antimatterGalaxies(max=2) {
    try {
      // 定位目标按钮元素
      const button = document.querySelector('div.galaxy button.o-primary-btn--dimension-reset');

      // 检查元素是否存在且未被禁用
      if (!button || button.classList.contains('o-primary-btn--disabled')) return;

      const outerDiv = button.closest('div.galaxy');
      if (!outerDiv) return;

      const h4 = outerDiv.querySelector('h4');
      if (!h4) return;

      const text = h4.textContent;
      const match = text.match(/(\d+)/);
      if (!match) return;

      // 转换为浮点数并判断条件
      const value = parseInt(match[1]);
      if (value < max) {
        // 模拟按下点击这个按钮
        button.click();
        console.log('[成功点击 Antimatter Galaxies]：状态：', text);
      }
    } catch (error) {
      console.error('[检测异常]', error);
    }
  }
}

ad = new AdHelper();
ad.challenge8();
// ad.start();
