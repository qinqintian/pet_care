const services = [
  {
    icon: "bath",
    title: "基础香波浴",
    text: "温和清洁、吹干、梳理和耳道外部清洁。",
    items: ["适合日常维护", "短毛犬猫友好"],
  },
  {
    icon: "scissors",
    title: "造型精修",
    text: "结合品种、毛量和主人偏好进行修剪。",
    items: ["面部、脚部、臀部细修", "可定制清爽造型"],
  },
  {
    icon: "coat",
    title: "皮毛护理",
    text: "针对干燥、打结、换毛期进行护理组合。",
    items: ["深层护毛素", "去浮毛与开结"],
  },
  {
    icon: "clean",
    title: "局部清洁",
    text: "爪底、眼周、耳周、肛周等细节护理。",
    items: ["快速到店服务", "可与洗澡组合"],
  },
];

const prices = [
  {
    title: "小型犬 / 猫咪",
    desc: "体重 8kg 内",
    price: "¥88",
    items: ["基础香波浴", "吹干梳理", "局部修整"],
  },
  {
    title: "中型犬",
    desc: "体重 8-18kg",
    price: "¥138",
    items: ["分区清洗", "浮毛处理", "护理建议"],
  },
  {
    title: "精修造型",
    desc: "按造型复杂度",
    price: "¥198",
    items: ["造型沟通", "全身修剪", "定型整理"],
  },
];

const steps = [
  {
    title: "到店评估",
    text: "检查毛结、皮肤、耳朵和情绪状态。",
  },
  {
    title: "预梳清洁",
    text: "先梳开浮毛，再进行温水清洗。",
  },
  {
    title: "吹干护理",
    text: "分层吹干，完成爪底、耳周和眼周整理。",
  },
  {
    title: "交付反馈",
    text: "说明洗后状态，给出居家护理建议。",
  },
];

function ServiceIcon({ name }: { name: string }) {
  const commonProps = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "bath") {
    return (
      <svg {...commonProps}>
        <path d="M4 12h16" />
        <path d="M5 12v3a5 5 0 0 0 5 5h4a5 5 0 0 0 5-5v-3" />
        <path d="M8 12V7a3 3 0 0 1 6 0" />
        <path d="M14 7h4" />
        <path d="M7 20l-1 2" />
        <path d="M17 20l1 2" />
      </svg>
    );
  }

  if (name === "scissors") {
    return (
      <svg {...commonProps}>
        <circle cx="6" cy="7" r="2.5" />
        <circle cx="6" cy="17" r="2.5" />
        <path d="M8.2 8.2 20 20" />
        <path d="M8.2 15.8 20 4" />
      </svg>
    );
  }

  if (name === "coat") {
    return (
      <svg {...commonProps}>
        <path d="M8 4c1.2 1.4 2.5 2 4 2s2.8-.6 4-2" />
        <path d="M7 5 4 9l3 2v8h10v-8l3-2-3-4" />
        <path d="M10 10h4" />
        <path d="M9 14h6" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M12 3v3" />
      <path d="M18 5.5 15.8 7.7" />
      <path d="M21 12h-3" />
      <path d="M18 18.5l-2.2-2.2" />
      <path d="M12 21v-3" />
      <path d="M6 18.5l2.2-2.2" />
      <path d="M3 12h3" />
      <path d="M6 5.5l2.2 2.2" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <nav className="nav" aria-label="主导航">
          <a className="brand" href="#top" aria-label="晴沐宠物洗护首页">
            <span className="brand-mark">沐</span>
            <span>晴沐宠物洗护</span>
          </a>
          <div className="nav-links" aria-label="页面分区">
            <a href="#services">服务</a>
            <a href="#price">价格</a>
            <a href="#process">流程</a>
            <a href="#booking">预约</a>
          </div>
          <a className="nav-action" href="#booking">
            立即预约
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-label="晴沐宠物洗护">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">当天可约 · 透明报价 · 温柔洗护</p>
              <h1>晴沐宠物洗护</h1>
              <p>
                为猫咪和狗狗提供洗澡、精修、护理和皮毛调理服务。独立清洁工位、低压力安抚流程，让每一次洗护都更舒服。
              </p>
              <div className="hero-actions">
                <a className="btn" href="#booking">
                  预约到店
                </a>
                <a className="btn secondary" href="#price">
                  查看价格
                </a>
              </div>
              <div className="hero-stats" aria-label="门店亮点">
                <div className="stat">
                  <strong>45-120 分钟</strong>
                  <span>按体型安排洗护时长</span>
                </div>
                <div className="stat">
                  <strong>一宠一消毒</strong>
                  <span>浴池、台面、工具独立清洁</span>
                </div>
                <div className="stat">
                  <strong>7 天护理建议</strong>
                  <span>洗后皮毛状态跟进</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="section-inner">
            <div className="section-head">
              <div>
                <p className="eyebrow">Services</p>
                <h2>适合不同宠物状态的洗护项目</h2>
              </div>
              <p>从日常洁净到造型精修，按毛发、皮肤状态和性格安排护理节奏。</p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="card service-card" key={service.title}>
                  <div>
                    <div className="icon">
                      <ServiceIcon name={service.icon} />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="price" className="band">
          <div className="section-inner">
            <div className="price-layout">
              <div className="feature-panel">
                <p className="eyebrow">Pricing</p>
                <h2>价格清晰，进店前就有预估</h2>
                <p>
                  实际报价会根据体型、毛量、打结程度和配合度微调。预约时留下宠物照片，我们会提前给出更准确的建议。
                </p>
                <ul className="check-list">
                  <li>
                    <span>✓</span>
                    <div>使用低刺激香波，洗护用品按皮毛状态选择。</div>
                  </li>
                  <li>
                    <span>✓</span>
                    <div>高龄、胆小、初次到店宠物可安排安抚时段。</div>
                  </li>
                  <li>
                    <span>✓</span>
                    <div>洗后反馈皮肤、耳朵、指甲和毛结情况。</div>
                  </li>
                </ul>
              </div>
              <div className="price-grid">
                {prices.map((item) => (
                  <article className="card price-card" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <div className="price">
                      {item.price} <small>起</small>
                    </div>
                    <ul>
                      {item.items.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="process">
          <div className="section-inner">
            <div className="section-head">
              <div>
                <p className="eyebrow">Flow</p>
                <h2>洗护流程</h2>
              </div>
              <p>每一步都尽量减少宠物紧张，也方便主人知道正在发生什么。</p>
            </div>
            <div className="process-grid">
              {steps.map((step) => (
                <article className="card step" key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="band">
          <div className="section-inner">
            <div className="section-head">
              <div>
                <p className="eyebrow">Reviews</p>
                <h2>主人们的洗后反馈</h2>
              </div>
            </div>
            <div className="review-layout">
              <article className="card quote">
                <p>
                  “我家狗很怕吹水机，这次店员会慢慢安抚，中途还发了状态照片，回家后毛特别蓬松。”
                </p>
                <strong>布丁主人 · 泰迪</strong>
              </article>
              <article className="card quote">
                <p>
                  “猫咪换毛期掉毛严重，做完护理后清爽很多，店里没有很重的香味，这点很放心。”
                </p>
                <strong>小满主人 · 英短</strong>
              </article>
            </div>
          </div>
        </section>

        <section id="booking" className="booking">
          <div className="section-inner">
            <div className="booking-layout">
              <div>
                <p className="eyebrow">Booking</p>
                <h2>预约晴沐宠物洗护</h2>
                <p>填写信息后，门店会确认时间、项目和预计价格。急单可直接电话联系。</p>
                <ul className="contact-list">
                  <li>
                    <strong>电话</strong>
                    <span>021-8088 6688</span>
                  </li>
                  <li>
                    <strong>地址</strong>
                    <span>上海市静安区花园路 128 号 1F</span>
                  </li>
                  <li>
                    <strong>营业</strong>
                    <span>周一至周日 10:00-20:00</span>
                  </li>
                </ul>
              </div>
              <form className="card form">
                <div className="form-grid">
                  <label>
                    主人姓名
                    <input type="text" name="owner" placeholder="请输入姓名" />
                  </label>
                  <label>
                    联系电话
                    <input type="tel" name="phone" placeholder="请输入手机号" />
                  </label>
                  <label>
                    宠物类型
                    <select name="pet" defaultValue="小型犬">
                      <option>小型犬</option>
                      <option>中型犬</option>
                      <option>大型犬</option>
                      <option>猫咪</option>
                    </select>
                  </label>
                  <label>
                    预约项目
                    <select name="service" defaultValue="基础香波浴">
                      <option>基础香波浴</option>
                      <option>皮毛护理</option>
                      <option>造型精修</option>
                      <option>局部清洁</option>
                    </select>
                  </label>
                  <label className="wide">
                    期望时间
                    <input type="text" name="time" placeholder="例如：本周六下午 3 点" />
                  </label>
                  <label className="wide">
                    宠物情况
                    <textarea
                      name="note"
                      placeholder="可以填写体重、毛量、是否怕生、是否打结"
                    />
                  </label>
                </div>
                <button className="btn" type="submit">
                  提交预约
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <strong>晴沐宠物洗护</strong>
          <span>让每只宠物干净、舒服、好好回家。</span>
        </div>
      </footer>
    </>
  );
}
