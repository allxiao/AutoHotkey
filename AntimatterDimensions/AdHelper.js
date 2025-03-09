class AdHelper {
  constructor() {
    this.intervalId = null;
  }

  start(sacrificeThreshold = 3.0, maxGalaxies = 1, dimensionBoostLimit = 12) {
    this.stop();
    const _this = this;
    function group() {
      _this._sacrifice(sacrificeThreshold);
      // 挑战 8 的时候 Antimatter Galaxy 是禁用的，但是因为挑战结束自动退回到常规模式
      // 所以这里所有情况都尝试 Galaxy Reset，以便无人监管的时候可以继续在常规模式下使用
      _this._antimatterGalaxies(maxGalaxies);
      _this._dimensionBoost(dimensionBoostLimit);
    }
    this.intervalId = setInterval(group, 500);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      console.log('停止之前的检测');
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


  _dimensionBoost(limit=10) {
    try {
      // 定位目标按钮元素
      const button = document.querySelector('div.dimboost button.o-primary-btn--dimension-reset');

      // 检查元素是否存在且未被禁用
      if (!button || button.classList.contains('o-primary-btn--disabled')) return;

      const outerDiv = button.closest('div.dimboost');
      if (!outerDiv) return;

      const h4 = outerDiv.querySelector('h4');
      if (!h4) return;

      const text = h4.textContent;
      const match = text.match(/(\d+)/);
      if (!match) return;

      // 转换为浮点数并判断条件
      const value = parseInt(match[1]);
      if (value >= limit) {
        // 模拟按下点击这个按钮
        return;
      }

      button.click();
      console.log('[成功点击 Dimension Boost] 当前按钮状态:', button.textContent);
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
//ad.challenge8();
ad.start();
