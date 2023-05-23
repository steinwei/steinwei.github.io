---
theme: penguin
colorSchema: 'auto'
layout: intro
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# themeConfig:
#   eventLogo: 'https://img2.storyblok.com/352x0/f/84560/2388x414/23d8eb4b8d/vue-amsterdam-with-name.png'
#   eventUrl: 'https://vuejs.amsterdam/'
#   twitter: '@alvarosabu'
#   twitterUrl: 'https://twitter.com/alvarosabu'
css: unocss
---

# 韦世杰转正答辩

刺猬技术开发部前端工作流的探索


---
layout: presenter
presenterImage: 'https://raw.githubusercontent.com/steinwei/Images/master/202305230219417.jpg'
---

# 个人介绍

韦世杰，花名斯坦，WEB前端开发工程师，喜欢折腾新技术

- 主力使用JavaScript，Typescript和Nodejs来编码，学过一点Golang
- 有一定的前端工程化，性能优化，物料中台建设，监控系统搭建等经验
- 最近在折腾前端AI方向，致力于前端开发提效，达到降本增效的目的

在业余时间，我可能会在这些地方活跃，

- 发布代码：https://github.com/steinwei
- 做算法题：https://leetcode.cn/u/steinwei
- 发布博客：https://personal-site-steinw.vercel.app

---

![](/微信截图_20230523202208.png)

![](/微信截图_20230523203119.png)


<!--
哈喽，大家好，我叫韦世杰，花名斯坦，是一位WEB前端开发工程师。

主力使用JavaScript，Typescript和Nodejs来编码，学过一点Golang。

最近在捣鼓前端AI方向，致力于前端开发提效，达到降本增效的目的。
-->

---

# 目录

<Toc />



---
layout: intro
---

# 工作回顾

- 前端开发流程规范化：文档沉淀、制定编码规范等
- 前端开发提效：构建工具升级、活动项目脚手架模板定制、业务组件库开发等
- 前端AI方向探索：ChatGPT-WEB落地、研究AIGC等

---
layout: intro
---

# 前端开发流程规范化

---
hideInToc: true
---

# 文档沉淀

三个月以来，输出了43篇文档沉淀到语雀中，涉及从需求确立到项目发版等的文档

- **系分文档**：基于业务需求，每个需求对应一份系分文档；好处是，先在文档画图跑一遍业务流程，然后再写代码会减少很多bug，对不容易想到的场景也会更加敏感一些，也方便其他同事指出流程中的错误之处
- **约定文档**：俗话说，好记性不如烂笔头，基于约定，包含一些需求排期表、git分支管理规范、转测规范、发版规范等，这些规范都是在实践中总结出来的，有了这些规范，可以减少很多不必要的沟通成本
- **分析文档**：基于技改需求，每个技改需求对应一份分析文档；好处是，多看看业务内的最佳实践是怎样的，我又是如何解决的
- **项目上手文档**：基于业务链路，梳理业务链路，减少新人熟悉业务以及项目的时间

---
hideInToc: true
---

# 制定编码规范

编码引入JavaScript规范工具eslint来约束代码规范，使团队代码风格更加统一

---
layout: intro
---

# 前端开发提效

---
hideInToc: true
---

# 活动项目构建工具升级

使用vite替换webpack，项目打包构建时间从10s到后来的200ms
<v-click>

| 次数 | 1（首次启动） | 2 | 3 | 4 |
| --- | --- | --- | --- | --- |
| Vite（现在） | 404ms | 291ms | 291ms | 292ms |
| Umi（过去） | 10.29s | 7.68s | 6.19s | 5.84s |

冷启动时间：启动项目时间从10s到400ms

热启动时间：每次ctrl+s的等待时间从6s到300ms，**极大提升了开发体验**
</v-click>


---
layout: two-cols
hideInToc: true
---

# mocks-server落地

- 降低联调时间
- 可以通过mock各种场景，达到充分自测，有效降低bug率
- 业务逻辑保鲜，降低项目上手成本

::right::

<img src="https://www.mocks-server.org/assets/images/inquirer-cli-987c4ed48c3e7039851aed8968406c05.gif" class="h-80" />

---
layout: intro
---

# 前端AI方向探索

---
layout: two-cols
hideInToc: true
---

# ChatGPT-WEB落地

<img src="/202305230255678.png" class="h-80" />

::right::

<div v-click>

但是我们尝试接入过程中，发现了一些问题

- 学习成本高
- prompt不够丰富，满足不了业务场景

</div>

---
hideInToc: true
---

# 落地情况

<img src="/微信截图_20230523200331.png" />

日常场景使用覆盖率达到80%以上，有效解决业务场景中遇到的各种问题。

---
layout: iframe-left
url: https://www.stable-learn.com/zh/p4-gpt-sdw#prompts%E6%98%AF%E4%BB%80%E4%B9%88
hideInToc: true
---

<!-- # prompt是什么

Prompts 是指ChatGPT为用户提供的话题或问题，这些话题或问题可以启发用户进行对话并提供相关的回答。Prompts可以使对话更加有针对性和有意义，从而提高ChatGPT的效率和用户体验。

通过Prompts，ChatGPT 可以更好地理解用户的意图和需求，并提供更加准确和有用的回答。同时，Prompts也可以帮助用户更好地表达问题或需求，从而使对话更加流畅和有效。

除此之外，Prompts 还可以帮助ChatGPT进行自我学习和优化，因为用户的回答和反馈可以被用来改进ChatGPT的算法和模型，从而提高其预测和回答的准确性和智能性。

因此，Prompts 在 ChatGPT 中的重要性不可忽视，它不仅可以提高用户体验和对话效率，还可以促进ChatGPT的自我学习和优化。

https://www.stable-learn.com/zh/p4-gpt-sdw -->

---
hideInToc: true
---

# AIGC探索

<img src="/20230523180633.png" />

二次开发，使用定制prompt来定制生成内容

降低使用人员的学习成本

---

# 个人评价

- 需要改善的
  - 对业务熟悉程度不够：这会导致一些问题，比如涉及到边界条件的判断没到位，特殊场景下的判断把握不了等
  - 性格不够活跃：主要是缺少比较骚的表情包，总体比较沉闷，喜欢搞自己的事情
  - 跨部门交流能力比较薄弱：不懂得如何要资源
  - 技术深度仍需提升：CSS大法好
  - 体育锻炼：提高身体素质，减少意外的生病几率
- 需要继续坚持的
  - 沉淀前端文档：三个月以来已从0篇沉淀到了40篇前端文档，包括但不限于前端开发全流程梳理，前端提效工具说明文档沉淀，需求系分文档的沉淀等
  - AI提效探索：距离ChatGPT4出来已经很长一段时间了，目前基本每天都在用，特别是涉及到不熟悉的方案设计，画流程图，技术选型，具体功能模块的时候，感觉就像有位P8大佬在指导你一样

---

# 未來展望

- 梳理业务链路：学习更多业务知识，学习一些产品方面的知识
- 更低BUG率：减少低级错误出现频率
- 更好的代码风格：多使用设计模式来写可复用的代码
- 更好的用户体验：做好页面性能监控，错误监控，用户体验指标监控，从而从数据上感受到更好的用户体验
- 更高效：把不熟悉的模块变成熟悉的模块，用更少的工时完成更多的功能模块

---
layout: image-right
image: 'https://user-images.githubusercontent.com/13499566/138950614-52ec045b-aa93-4d52-91df-b782cc9c7143.jpg'
---

# Code

Use code snippets and get the highlighting directly!

```ts
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = {...user, ...update}  
  saveUser(id, newUser)
}
```
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