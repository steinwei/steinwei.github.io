---
theme: purplin
# https://sli.dev/custom/highlighters.html
---

# 韦世杰转正答辩

刺猬技术开发部前端工作流的探索

---

# 个人介绍

<br>

韦世杰，花名斯坦

- Web前端开发工程师
- 平时喜欢折腾新技术，逛逛前端娱乐圈
- 有一定的前端工程化，性能优化，物料中台搭建，监控系统搭建等经验
- 最近在折腾前端AI方向，致力于前端开发提效，达到降本增效的目的

在业余时间，我可能会在这些地方活跃，

- 折腾技术：https://github.com/steinwei
- 做算法题：https://leetcode.cn/u/steinwei


---

# 目录

<Toc />

---
layout: intro
---

# 工作回顾

- 前端文档体系搭建：文档沉淀、团队编码规范制定等
- 前端开发提效：构建工具升级、mock server落地、活动项目脚手架模板定制、业务组件库搭建、通用工具库落地等
- 前端AI方向探索：vscode接入Copilot、ChatGPT-Web落地、AIGC探索等

---
layout: intro
hideInToc: true
---

# 前端文档体系搭建

---
hideInToc: true
---

# 文档沉淀

三个月以来，基于自身实践经验，输出了43篇文档沉淀到语雀中，主要分为这几大类：

- **约定文档**：好记性不如烂笔头，基于约定，整理了需求排期表、分支管理规范、转测规范、发版规范等文档；好处是，有了这些规范，可以减少很多不必要的沟通成本
- **系分文档**：基于业务需求，每个需求对应一份系分文档；好处是，先在文档画图过一遍业务流程，然后再写代码会减少很多bug，也方便其他同事指出流程中的错误之处
- **分析文档**：基于技改需求，每个技改需求对应一份分析文档；好处是，多看看业界内技术方案最佳实践是怎样的，公司内部又是如何解决的
- **项目上手文档**：主要作用是减少新人熟悉业务以及项目的时间；以及梳理业务链路，理解事前、事中、事后的场景分别是怎样的，作用于什么用户，达到什么预期
- **知识沉淀文档**：主要沉淀一些前端技术分享类的文档

---
layout: image
image: /微信截图_20230523234819.png
hideInToc: true
---

---
layout: image
image: /前端技术图谱.png
hideInToc: true
---

---
layout: intro
hideInToc: true
---

# 前端开发提效

---
hideInToc: true
---

# 活动项目构建工具升级

使用vite替换webpack，项目打包构建时间从10s到后来的200ms
<v-click>

### vite和webpack构建时间对比

| 次数 | 1（首次启动） | 2 | 3 | 4 |
| --- | --- | --- | --- | --- |
| Vite（现在） | 404ms | 291ms | 291ms | 292ms |
| Umi（过去） | 10.29s | 7.68s | 6.19s | 5.84s |

冷启动时间：启动项目时间从10s到400ms

热启动时间：每次ctrl+s的等待时间从6s到300ms，**极大提升了开发体验**

### 其他好处：

与业界新技术接轨，提升团队技术实力
</v-click>


---
layout: two-cols
hideInToc: true
---

# mocks-server落地

Mock Server是一种用来模拟服务端接口的工具。

- 避免了服务端未就绪或接口未定义的问题：让前端开发在没有服务端支持的情况下进行开发
- 方便定位问题：通过模拟数据不同场景下的返回，方便定位到页面问题
- 有效降低bug率：可以模拟各种请求场景，达到充分自测

::right::

<img src="https://www.mocks-server.org/assets/images/inquirer-cli-987c4ed48c3e7039851aed8968406c05.gif" class="h-80" />

---
layout: intro
hideInToc: true
---

# 前端AI方向探索

---
hideInToc: true
---

# ChatGPT-Web落地

<img src="/微信截图_20230523200331.png" />

日常场景使用覆盖率达到80%以上，有效解决业务场景中遇到的各种问题。

---
layout: image
image: /企业微信截图_20230524114928.png
---

---
layout: two-cols
hideInToc: true
---

<img src="/202305230255678.png" class="h-80" />

::right::

<div v-click>

但是我们尝试接入过程中，发现了一些问题

- 数据隐私问题
- 回答质量不够稳定，甚至有时候会出现难以发现的不合理的回答

抛开数据隐私的问题先不提，

解决回答质量不够稳定问题的关键其实在于对prompt的掌握，

而这又有新的问题，比如：

- 一定的prompt学习成本

</div>


---
layout: iframe
url: https://www.stable-learn.com/zh/p4-gpt-sdw#prompts%E6%98%AF%E4%BB%80%E4%B9%88
hideInToc: true
---

<!-- 充当角色+指令+上下文+规则+问题 -->

---
hideInToc: true
---

# AIGC探索

<img src="/20230523180633.png" />

<div v-click>

二次开发ChatGPT-Web，使用定制prompt来定制生成内容

同时降低使用人员的学习成本

</div>


---

# 个人评价

<div v-click>

- 需要改善的
  - 对业务熟悉程度不够：多看看代码逻辑，多向前辈请教问题
  - 性格不够活跃：比较慢热，闷骚，打算多尝试做些事情，多和同事交流
  - 技术深度仍需提升：学习更多服务端知识，补齐短板
  - 体育锻炼：提高身体素质，减少意外的生病几率
- 需要继续坚持的
  - 沉淀文档：让前端开发更加专业，规范化
  - AI方向探索：主打降本增效，扩宽技术视野

</div>

---

# 未來展望

- 更专业：学习更多产品方面的知识，提出更合理、专业的建议
- 更低BUG率：减少低级错误出现频率
- 更好的代码风格：多使用设计模式来写可复用的代码，避免代码写着写着就成为了“屎山”代码
- 更好的用户体验：做好页面性能监控，错误监控，用户体验指标监控，从而从数据上感受到更好的用户体验
- 更高效：把不熟悉的模块变成熟悉的模块，用更少的工时完成更多的功能模块

---
layout: center
class: "text-center"
---

# Thanks


---
layout: center
class: "text-center"
---

# Q & A



---
layout: end
---