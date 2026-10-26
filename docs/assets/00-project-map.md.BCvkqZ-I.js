import{_ as e,o as s,c as n,a2 as t}from"./chunks/framework.DUFi_nbG.js";const h=JSON.parse('{"title":"Project Map: Touchless Chef Gesture CV","description":"","frontmatter":{},"headers":[],"relativePath":"00-project-map.md","filePath":"00-project-map.md"}'),p={name:"00-project-map.md"};function i(r,a,o,l,c,d){return s(),n("div",null,[...a[0]||(a[0]=[t(`<h1 id="project-map-touchless-chef-gesture-cv" tabindex="-1">Project Map: Touchless Chef Gesture CV <a class="header-anchor" href="#project-map-touchless-chef-gesture-cv" aria-label="Permalink to &quot;Project Map: Touchless Chef Gesture CV&quot;">​</a></h1><h2 id="folder-tree" tabindex="-1">Folder Tree <a class="header-anchor" href="#folder-tree" aria-label="Permalink to &quot;Folder Tree&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>39-hand-gesture-cv/</span></span>
<span class="line"><span>├── HandGestureCV-Clean-Project/</span></span>
<span class="line"><span>│   ├── src/</span></span>
<span class="line"><span>│   │   ├── components/</span></span>
<span class="line"><span>│   │   │   ├── Gesture/</span></span>
<span class="line"><span>│   │   │   │   └── GestureCore.js       # Core landmark canvas binding</span></span>
<span class="line"><span>│   │   │   └── ChefVideoPlayer.jsx      # Video viewport, camera preview &amp; gesture HUD</span></span>
<span class="line"><span>│   │   ├── hooks/</span></span>
<span class="line"><span>│   │   │   └── useGesture.js            # Custom React hook for gesture state</span></span>
<span class="line"><span>│   │   ├── services/</span></span>
<span class="line"><span>│   │   │   ├── GestureManager.js        # Singleton managing camera stream &amp; recognizer</span></span>
<span class="line"><span>│   │   │   └── GestureService.js        # Alternate model initialization factory</span></span>
<span class="line"><span>│   │   ├── utils/</span></span>
<span class="line"><span>│   │   │   └── gestureMap.js            # Action mapping table (Palm -&gt; Pause, Fist -&gt; Play)</span></span>
<span class="line"><span>│   │   ├── App.jsx                      # App shell, video selector, and header HUD</span></span>
<span class="line"><span>│   │   ├── index.css                    # Tailwind utility injections</span></span>
<span class="line"><span>│   │   └── main.jsx                     # React 18 DOM mount point</span></span>
<span class="line"><span>│   ├── index.html                       # HTML5 entry with viewport meta</span></span>
<span class="line"><span>│   ├── package.json                     # MediaPipe tasks vision, React 18, Tailwind</span></span>
<span class="line"><span>│   └── vite.config.js                   # Vite bundling config</span></span>
<span class="line"><span>└── docs/                                # VitePress documentation portal</span></span></code></pre></div><h2 id="dependencies-rationale" tabindex="-1">Dependencies &amp; Rationale <a class="header-anchor" href="#dependencies-rationale" aria-label="Permalink to &quot;Dependencies &amp; Rationale&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Package</th><th>Version</th><th>Purpose</th></tr></thead><tbody><tr><td><code>@mediapipe/tasks-vision</code></td><td>0.10.14</td><td>Google&#39;s cross-platform Wasm neural network suite for vision tasks</td></tr><tr><td><code>react</code></td><td>18.3.1</td><td>Declarative component UI library for reactive player states</td></tr><tr><td><code>lucide-react</code></td><td>0.441.0</td><td>Visual indicator iconography (Play, Pause, Hand, Camera, Sparkles)</td></tr><tr><td><code>tailwindcss</code></td><td>3.4.15</td><td>Responsive utility styling for kitchen-grade dark UI</td></tr><tr><td><code>vite</code></td><td>5.4.11</td><td>High-speed ESM development server and Rollup production bundler</td></tr></tbody></table>`,5)])])}const m=e(p,[["render",i]]);export{h as __pageData,m as default};
