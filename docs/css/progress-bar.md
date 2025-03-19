> 进度条作为可视化大屏系统中展示数据状态的关键元素，其视觉效果直接影响用户的使用体验，而传统的进度条往往呈现出固定的样式，缺乏视觉吸引力。在这种场景下，一种基于 Vue 和 CSS 实现渐变栅格进度条的方法应运而生，该方法将进度条划分为多个栅格单元，每个单元格颜色渐变并且连续，可以根据不同的场景配置个性化属性，具有极高的灵活度和交互性，可以调整颜色、栅格数量、间隔、宽度、高度、圆角、数值、标签、刻度等属性，并同时具有平滑的过渡效果，特别适用于可视化大屏系统中。

## 1 原理

### 1.1 划分栅格单元

首先定义一个父容器，用于容纳所有栅格，然而栅格的数量不定，所以需要设置弹性布局，使得任意数量的栅格能够自动均匀平铺。样式合适位置预留响应式变量，保证属性的可配置性。

与此同时，给每个栅格加上平滑的过渡动画，确保每次数据发生变化引起图表变化时能够平滑过渡，而并非跳跃式突变，增强了用户的交互体验和视觉感受，同时能够引导用户注意力，突出变化部分的重要内容或功能。如下图。
![](https://zhang.beer/static/images/progress_bar_1.png)

### 1.2 颜色渐变

为了解决渐变栅格百分比条中栅格之间存在空隙而颜色可以连续的问题，需要利用 CSS 的两个重要属性：background 属性和伪元素。

首先，将每个栅格的背景色设置相同。接着，调整 background 的 size 为栅格数量倍的宽度，调整 position 来指定背景的位置，将每个栅格的背景色都在上一个栅格的基础上，偏移一个栅格的距离。为了实现这一效果，还需将栅格设置为溢出隐藏，并确保背景色不重复，如下图。
![](https://zhang.beer/static/images/progress_bar_2.png)

由于进度条分为已完成和未完成两部分，而上述过程仅实现了所有栅格的连续渐变，无法突显出进度，所以需要控制渐变色在指定位置结束。然而，目前的方案似乎无法实现渐变色截断的效果，因此我们尝试使用遮罩。具体而言，就是将每个栅格都增加一个伪元素，将其完全覆盖在栅格上，根据计算的比例，已完成部分的伪元素背景色设置为透明，将渐变色显示出来，未完成部分的则设置为默认背景色，将下方的渐变色进行遮罩。

伪元素可以通过 CSS 自定义属性进行变量的绑定，在字符串前加上两根连接线“--”，可以将该字符串声明为 CSS 自定义属性，然后通过 var()函数读取变量，最后使用 Vue 的动态 style 和模板字符串传入，这样，这个动态属性便可以根据数据的变化动态的渲染伪元素了。如下图。
![](https://zhang.beer/static/images/progress_bar_3.png)

### 1.3 标签与刻度

为了最大程度上不影响原有栅格进度条的层级结构，标签与刻度这种附加属性我们选择了绝对定位。新建一个盒子，保持与栅格的父容器宽度相同，添加进度开始值、结束值作为左右刻度，结合当前值可以计算出进度的百分比，同时根据栅格间距和当前值等属性可以计算出标签的位置。如下图。
![](https://zhang.beer/static/images/progress_bar_4.png)

## 2 实现方法

有了前面的思路铺垫，现在来着手实现。

### 2.1 可配置属性

首先我们需要配置用户可自定义修改的属性，并给予默认值，这些属性通过绑定响应式变量的方式来实现实时刷新。

最小值、最大值即进度条最左侧和最右侧的位置，默认为 0 和 2，当前值即进度所在的位置，默认为 1.66。

栅格数量指的是总共划分多少个栅格，数量不同，每个栅格所代表的比例也将发生改变，默认为 10。

栅格间距是每个栅格之间空余的距离，单位为百分比，默认为 2%。

渐变色是从起始颜色到终止颜色的色彩变化，形成一种流畅的过渡效果，增强视觉吸引力，默认为#6AE5BB 到#3C7DDF 的过渡。

背景色则可以认为是进度未完成的部分，默认使用颜色#AAAAAA 作为区分。

数值的展示方式分为真实值和百分比值两种，切换后标签和刻度随之改变，其字体、字号、颜色、小数点也可自定义。

此外，栅格的圆角、高度、标签的偏移及其显隐等属性也在相应位置插入了变量提供给用户自定义修改。

### 2.2 数据初始化

在页面加载之前，需要进行数据的初始化，提前计算部分属性。

通过最小值、最大值、当前值计算出当前值所占比例（valuePercent），默认比例为(1.66-0)/(2-0)\*100%=83%。

通过栅格的个数计算每个栅格代表的比例（perGridPercent），默认每个栅格代表 100%/10=10%。

通过 valuePercent 和 perGridPercent 得到完整显示渐变色的栅格个数（completeGridNum）。Math.floor(83%/10%)=8，也就意味着前 8 个栅格的伪元素遮罩层的背景色，可以直接设置透明。

而余下的一个不足以完整显示渐变色的栅格，我们需要计算渐变色的部分占整个栅格的比例（remainingGridPercent）。用 completeGridNum 乘以 perGridPercent，得到完整显示的比例，再用 valuePercent 减去完整显示的比例，得到剩余需要覆盖的部分，最后除以 perGridPercent，即(83%-8\*10%)/10%=30%，也就是说，余下的渐变色只需占据一个栅格的 30%。

通过栅格间隔（interval）和栅格数量（number）得到每个栅格的实际宽度（perGridWidth），即用 100%减去 interval 乘以 number-1，得到所有栅格的实际宽度，随后除以 number，interval 默认为 2%，(100%-2%\*(10-1))/10=8.2%。Vue 的计算属性可以根据依赖关系进行计算并缓存，所以我们可以用 computed 来计算栅格的实际宽度，由于栅格的间隔和数量都是响应式变量，所以宽度也是响应式的。

通过(completeGridNum+ remainingGridPercent)*perGridWidth+completeGridNum*interval，不难算出标签绝对定位下距离左端的位置，即(8+30%)*8.2%+8*2%=84.06%。

### 2.3 开始绘制

通过 Vue 的 v-for 指令，得到指定数量的栅格。通过:style="\`--barWidth:\${perGridWidth}\`"，将实际宽度传入组件内部，然后使用该值给栅格和伪元素遮罩的宽度赋值，具体为"width:var(--barWidth)"。

接下来，利用 CSS 从左至右的线性渐变色，均匀的平铺到所有的栅格上，即 "background:linear-gradient(to right,${beginColor},\${overColor}) \${(i-1)*perGridWidth}/\${number*100}% no-repeat"。这里的 beginColor，overColor 为渐变起始和终止颜色，i 为栅格的序号。每个栅格的背景色都为扩展了 number 倍的渐变色，不同的则是各自的偏移量，都偏移了(i-1)\*perGridWidth。

然后就是添加遮罩层，通过 computed 计算属性，可以根据 i 值大小，动态返回背景色的字符串。当小于等于 completeGridNum 时，返回透明色；当等于 completeGridNum+1 时，通过线性渐变，按百分比分配透明色和背景色，即\`linear-gradient(to right,transparent ${remainingGridPercent},${backColor} ${remainingGridPercent})`，其中 backColor 为栅格背景色，意味着从左侧开始，直到达到 remainingGridPercent 指定的位置时，颜色保持透明色。在 remainingGridPercent 位置之后，颜色保持为背景色；其他情况下返回背景色。

最后，为栅格和其伪元素遮罩添加"transition: all 1s"的过渡动画。

## 核心代码

```javascript
<div class="grid-progress-container">
  <div
    class="grid-progress-bar"
    v-for="i in state.mergedConfig.bar.number"
    :style="`--barRadius:${state.mergedConfig.bar.radius}px;
    --barHeight:${state.mergedConfig.bar.height}px;
    --barWidth:${perGridWidth}%;
    --barBackground:${renderBack(i)};
    background:linear-gradient(to right,${state.mergedConfig.bar.preColor},${state.mergedConfig.bar.suffixColor}) ${
      (i - 1) * perGridWidth
    }% / ${state.mergedConfig.bar.number * 100 + '%'} no-repeat;`"
  ></div>
</div>

const initData = () => {
  // 当前值所占比例(100%)
  state.valuePercent =
    ((state.mergedConfig.dataset.value - state.mergedConfig.dataset.min) /
      (state.mergedConfig.dataset.max - state.mergedConfig.dataset.min)) *
    100
  // 每一个栅格比例(100%)
  state.perGridPercent = 100 / state.mergedConfig.bar.number
  // 完整渲染的栅格个数
  state.renderGridNum = Math.floor(state.valuePercent / state.perGridPercent)
  // 不完整渲染的栅格剩余比例(1)
  state.remainingGridPercent = (state.valuePercent - state.renderGridNum * state.perGridPercent) / state.perGridPercent
}

const perGridWidth = computed(() => {
  return (100 - state.mergedConfig.bar.interval * (state.mergedConfig.bar.number - 1)) / state.mergedConfig.bar.number
})

const renderBack = (i: number) => {
  if (state.remainingGridPercent === 0) {
    if (i <= state.renderGridNum) return 'transparent'
    else return `${state.mergedConfig.bar.backColor}`
  } else {
    if (i <= state.renderGridNum) {
      return 'transparent'
    } else if (i === state.renderGridNum + 1) {
      return `linear-gradient(to right,transparent ${state.remainingGridPercent * 100}%,${
        state.mergedConfig.bar.backColor
      } ${state.remainingGridPercent * 100}%)`
    } else {
      return `${state.mergedConfig.bar.backColor}`
    }
  }
}
```

```js
.grid-progress-container {
    width: 100%;
    padding: 60px;
    display: flex;
    justify-content: space-between;
    .grid-progress-bar {
      height: var(--barHeight);
      width: var(--barWidth);
      border-radius: var(--barRadius);
      transition: all 1s;
      position: relative;
      &::before {
        position: absolute;
        content: '';
        height: 100%;
        width: 100%;
        background: var(--barBackground);
        border-radius: var(--barRadius);
        transition: all 1s;
      }
    }
  }
```
