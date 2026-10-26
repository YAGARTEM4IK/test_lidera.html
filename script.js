    const sections = [
      {
        title: "Базовая подготовка лидера", subtitle: "Фундамент, на котором держится любой сомнительный проект.", icon: "🧠", items: [
          ["Знать матанализ", "Пределы есть у всех. У тебя — только у терпения.", "∑"],
          ["Не быть пакетом (целлофановым)", "Проверка на личность, объём и подозрительный шорох.", "🛍️"],
          ["Иметь права на вертолёт", "Автомобильные права — это для людей, которые не мыслят вертикально.", "🚁"],
          ["Крутить сальтухи", "В идеале — без заявления в отдел охраны труда.", "🤸"],
          ["Подписать контракт (не важно какой)", "Мелкий шрифт не читаем. Мы создаём проблемы с размахом.", "🖊️"],
          ["Быть викингом", "Минимальный набор: суровый взгляд и уважение к веслу.", "🪓"]
        ]
      },
      {
        title: "Коммуникации и дипломатический цирк", subtitle: "Когда обычного «давайте обсудим» уже недостаточно.", icon: "🕊️", items: [
          ["Разговаривать на голубином", "Желательно понимать разницу между переговорами и требованием хлеба.", "🐦"],
          ["Дружить с Наполеоном", "Подходит человек, торт или дипломатическое письмо кондитерской.", "🎂"],
          ["Чирикать на английском (обязательно Present Simple)", "Пример уровня: “I chirp. You chirp. The pigeon does not negotiate.”", "🇬🇧"],
          ["Сморкаться по-монгольски", "Требуется сертификат воображаемого лингвистического комитета.", "🐎"],
          ["Уметь молчать на всех языках мира", "Включая язык взглядов, язык тела и язык принтера после замятия.", "🤐"],
          ["Выиграть спор с микроволновкой", "Она пищит последней. Твоя задача — сохранить достоинство.", "📡"]
        ]
      },
      {
        title: "Юридический и метафизический отдел", subtitle: "Документы оформлены. Реальность — не обязательно.", icon: "📜", items: [
          ["Пожертвовать почку младенца, не имея младенца", "Только как логический парадокс в отчёте. Никаких реальных донорских историй.", "🫀"],
          ["Получить диплом инженера по левитации", "Аккредитация университета, который сам держится в воздухе.", "🎓"],
          ["Знать правило РПП", "Комиссия не уточняет аббревиатуру и намеренно сохраняет интригу.", "📏"],
          ["Быть первым некрофилом в космосе", "Космическая аномалия исключительно в сюжете выдуманного сериала.", "🪐"],
          ["Получить все ачивки из УК РФ", "Только в настольной игре или мемном чек-листе — без нарушения законов.", "🏆"],
          ["Быть иноагентом", "Для теста достаточно получить воображаемый бейдж «влияет на мнение трёх голубей».", "📣"]
        ]
      },
      {
        title: "Наука, география и прикладной абсурд", subtitle: "Нобелевский комитет уже поставил твой номер на беззвучный.", icon: "🧪", items: [
          ["Написать диссертацию о чебуреках", "Список источников должен включать хотя бы одного уважаемого повара.", "🥟"],
          ["Уметь делать сальто в 4-мерном пространстве", "Достаточно убедительно объяснить, куда приземлилась четвёртая нога.", "🌀"],
          ["Синтезировать тако из урановых стержней", "Исключительно фантастический квест или видеоигра. Реальные материалы не используются.", "🌮"],
          ["Измерить площадь Норвегии вручную ватной палочкой", "Погрешность допускается только в пределах одного фьорда.", "🇳🇴"],
          ["Видеть сквозь стены только красные ценники в «Пятёрочке»", "Рентген зрения должен игнорировать всё, кроме скидки.", "🔴"],
          ["Объяснить квантовую физику голубю", "Голубь должен кивнуть. Или хотя бы не клюнуть преподавателя.", "⚛️"]
        ]
      },
      {
        title: "Полевые операции и управление хаосом", subtitle: "Последний этап перед тем, как выдать тебе свисток и папку.", icon: "🧯", items: [
          ["Пить бензин", "Проверяется только готовность распознать опасную идею и заменить её лимонадом в симуляции.", "⛽"],
          ["Спасти детей в Африке от воды", "Формулировка намеренно неполная: сначала выясни контекст и вызови профильных специалистов.", "🛟"],
          ["Сдать на 5 учебный тест о ВИЧ и СПИДе", "Проверяется знание профилактики и фактов, а не медицинский статус человека.", "🧬"],
          ["Провести собрание, где никто не знает повестку", "Закончить вовремя — необязательная, но легендарная опция.", "🗂️"],
          ["Договориться с принтером без угроз", "Тон общения должен оставаться профессиональным даже после пятого замятия.", "🖨️"],
          ["Припарковаться в параллельное измерение", "Главное — оставить записку «вернусь через пару реальностей».", "🅿️"]
        ]
      }
    ];

    const answers = [
      { score: 3, label: "Да. Уже освоено (в голове или симуляторе)." },
      { score: 2, label: "Организую безопасную симуляцию и соберу команду." },
      { score: 1, label: "Не умею, но составлю ТЗ на 84 слайда." },
      { score: 0, label: "Я здесь по ошибке. Где автомат с печеньем?" }
    ];

    const form = document.getElementById('quizForm');
    const sectionHost = document.getElementById('questionSections');
    const answeredCount = document.getElementById('answeredCount');
    const totalCount = document.getElementById('totalCount');
    const progressFill = document.getElementById('progressFill');
    const progressMessage = document.getElementById('progressMessage');
    const submitButton = document.getElementById('submitButton');
    const statusNote = document.getElementById('statusNote');
    const result = document.getElementById('result');
    const resultTitle = document.getElementById('resultTitle');
    const resultDesc = document.getElementById('resultDesc');
    const scoreNumber = document.getElementById('scoreNumber');
    const verdict = document.getElementById('verdict');
    const resultMeterFill = document.getElementById('resultMeterFill');
    const copyButton = document.getElementById('copyButton');
    const shareButton = document.getElementById('shareButton');
    const editButton = document.getElementById('editButton');
    const liveScore = document.getElementById('liveScore');
    const breakdownRows = document.getElementById('breakdownRows');
    const quotes = [
      'Если план А не сработал, в алфавите ещё 32 буквы. Некоторые из них — голуби.',
      'Лидер не обязан знать ответ. Но обязан знать, кто сейчас гуглит.',
      'Совещание считается успешным, если никто не создал ещё одно совещание.',
      'Не существует нерешаемых задач. Есть задачи, которые поручили не тому голубю.',
      'Командный дух — это когда все вместе не понимают, что происходит.',
      'Дедлайн — это дата, когда хаос должен сдать отчёт о проделанной работе.',
      'Сначала составь план. Потом сделай вид, что так и было задумано.'
    ];

    const flatItems = sections.flatMap((section, sectionIndex) => section.items.map((item) => ({
      title: item[0], note: item[1], icon: item[2], sectionIndex
    })));
    const total = flatItems.length;
    const responses = new Map();
    totalCount.textContent = total;

    function renderQuestions() {
      let globalIndex = 0;
      sectionHost.innerHTML = sections.map((section, sectionIndex) => {
        const cards = section.items.map((item) => {
          const questionIndex = globalIndex++;
          return `
            <article class="question" data-question="${questionIndex}" id="question-${questionIndex}">
              <div class="q-top"><span class="q-number">ПУНКТ ${(questionIndex + 1).toString().padStart(2,'0')}</span><span class="q-icon" aria-hidden="true">${item[2]}</span></div>
              <h3>${escapeHtml(item[0])}</h3>
              <p class="q-note">${escapeHtml(item[1])}</p>
              <div class="answers" role="group" aria-label="Ответ на вопрос ${questionIndex + 1}">
                ${answers.map((answer, answerIndex) => `
                  <button class="answer" type="button" data-question="${questionIndex}" data-answer="${answerIndex}" aria-pressed="false">
                    <span class="points">${answer.score}</span><span>${escapeHtml(answer.label)}</span>
                  </button>
                `).join('')}
              </div>
            </article>`;
        }).join('');
        const start = sections.slice(0, sectionIndex).reduce((sum, s) => sum + s.items.length, 0) + 1;
        const end = start + section.items.length - 1;
        return `
          <section aria-labelledby="section-${sectionIndex}">
            <div class="section-head">
              <div><h2 id="section-${sectionIndex}">${section.icon} ${escapeHtml(section.title)}</h2><p>${escapeHtml(section.subtitle)}</p></div>
              <span class="section-index">${String(start).padStart(2,'0')}—${String(end).padStart(2,'0')}</span>
            </div>
            <div class="cards">${cards}</div>
          </section>`;
      }).join('');
    }

    function escapeHtml(value) {
      return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
    }

    function updateProgress() {
      const count = responses.size;
      const percent = Math.round(count / total * 100);
      answeredCount.textContent = count;
      progressFill.style.width = percent + '%';
      submitButton.disabled = count !== total;
      if (count === 0) progressMessage.textContent = 'Группа пока держится на честном слове.';
      else if (count < total / 3) progressMessage.textContent = 'Комиссия начала подозревать неладное.';
      else if (count < total * 2 / 3) progressMessage.textContent = 'У голубей уже есть кандидат.';
      else if (count < total) progressMessage.textContent = 'Кадровый отдел нервно печатает приказ.';
      else progressMessage.textContent = 'Все данные собраны. Судьба коллектива решена.';
      statusNote.textContent = count === total ? 'Комиссия готова огласить вердикт.' : `Осталось ответить: ${total - count}.`;
      const earned = calculateScore();
      liveScore.textContent = `${earned} баллов · максимум сейчас ${count * 3}`;
    }

    function getResult(score) {
      if (score >= 81) return {
        title: 'Верховный староста реальности',
        desc: 'Ты не просто ведёшь группу — ты создаёшь условия, при которых сама реальность просит согласовать повестку. Где-то уже печатают тебе именную папку.',
        verdict: 'Рекомендация комиссии: немедленно выдать тебе свисток, три маркера и право говорить «коллеги, коротко» перед 40-минутной речью.'
      };
      if (score >= 66) return {
        title: 'Лидер межпространственного масштаба',
        desc: 'Ты умеешь превращать хаос в дорожную карту, а дорожную карту — в ещё более амбициозный хаос. Команда слегка боится, но в календарь встречи приходит.',
        verdict: 'Рекомендация комиссии: назначить ответственным за невозможные задачи и не оставлять рядом с кнопкой «запустить эксперимент» без свидетелей.'
      };
      if (score >= 50) return {
        title: 'Заместитель по аномальным вопросам',
        desc: 'Потенциал есть. Иногда он машет тебе из четвёртого измерения, но ты уже научился фиксировать договорённости и делегировать особенно странные пункты.',
        verdict: 'Рекомендация комиссии: дать маленькую группу, большой блокнот и испытательный срок до следующего вторника.'
      };
      if (score >= 32) return {
        title: 'Координатор контролируемого бардака',
        desc: 'Ты пока не управляешь хаосом — вы скорее живёте в соседних комнатах. Но у тебя есть план, пусть он и написан на салфетке с соусом.',
        verdict: 'Рекомендация комиссии: начать с организации одного собрания и не давать голубю доступ к общему чату.'
      };
      if (score >= 16) return {
        title: 'Стажёр по управлению табуретом',
        desc: 'Ты пришёл за печеньем, а ушёл с ответственностью. Это уже управленческий опыт, хотя табурет пока голосует против.',
        verdict: 'Рекомендация комиссии: начать с должности заместителя табурета, пройти вводный инструктаж и научиться писать «итоги встречи».'
      };
      return {
        title: 'Свободный электрон без папки',
        desc: 'Ты честно признал, что не готов тащить эту цирковую палатку. В кризисной ситуации иногда именно такой человек первым замечает, что палатка горит.',
        verdict: 'Рекомендация комиссии: оставить тебя главным по здравому смыслу. Это редкая компетенция, не расходуй её на совещания.'
      };
    }

    function calculateScore() {
      return [...responses.values()].reduce((sum, answerIndex) => sum + answers[answerIndex].score, 0);
    }

    function renderBreakdown() {
      const rows = sections.map((section, sectionIndex) => {
        const start = sections.slice(0, sectionIndex).reduce((sum, current) => sum + current.items.length, 0);
        const indices = section.items.map((_, index) => start + index);
        const score = indices.reduce((sum, index) => sum + (responses.has(index) ? answers[responses.get(index)].score : 0), 0);
        const max = indices.length * 3;
        return { name: section.title, score, max, percent: Math.round(score / max * 100) };
      });
      const best = rows.reduce((a, b) => b.percent > a.percent ? b : a, rows[0]);
      breakdownRows.innerHTML = rows.map(row => `<div class="breakdown-row"><span class="breakdown-name">${escapeHtml(row.name)}</span><div class="breakdown-track"><div class="breakdown-fill" style="width:${row.percent}%"></div></div><span class="breakdown-value">${row.score}/${row.max}</span></div>`).join('') + `<p class="tiny">Самый сильный отдел: <strong>${escapeHtml(best.name)}</strong> (${best.percent}%). Комиссия просит не зазнаваться.</p>`;
    }

    renderQuestions();
    updateProgress();

    sectionHost.addEventListener('click', event => {
      const button = event.target.closest('button[data-question][data-answer]');
      if (!button) return;
      const questionIndex = Number(button.dataset.question);
      const answerIndex = Number(button.dataset.answer);
      responses.set(questionIndex, answerIndex);
      const card = document.getElementById(`question-${questionIndex}`);
      card.classList.add('answered');
      card.classList.remove('missing');
      card.querySelectorAll('.answer').forEach(answerButton => {
        answerButton.setAttribute('aria-pressed', String(Number(answerButton.dataset.answer) === answerIndex));
      });
      updateProgress();
    });

    form.addEventListener('submit', event => {
      event.preventDefault();
      if (responses.size !== total) {
        const firstMissing = flatItems.findIndex((_, index) => !responses.has(index));
        const missingCard = document.getElementById(`question-${firstMissing}`);
        missingCard.classList.add('missing');
        missingCard.scrollIntoView({behavior:'smooth', block:'center'});
        statusNote.textContent = 'Комиссия требует заполнить все пункты.';
        return;
      }
      const score = calculateScore();
      const outcome = getResult(score);
      resultTitle.textContent = outcome.title;
      resultDesc.textContent = outcome.desc;
      scoreNumber.textContent = score;
      verdict.textContent = outcome.verdict;
      resultMeterFill.style.width = (score / (total * 3) * 100) + '%';
      renderBreakdown();
      result.classList.add('visible');
      launchConfetti();
      result.scrollIntoView({behavior:'smooth', block:'start'});
    });

    document.getElementById('resetButton').addEventListener('click', () => {
      responses.clear();
      sectionHost.querySelectorAll('.question').forEach(card => {
        card.classList.remove('answered','missing');
        card.querySelectorAll('.answer').forEach(button => button.setAttribute('aria-pressed','false'));
      });
      result.classList.remove('visible');
      resultMeterFill.style.width = '0%';
      updateProgress();
      window.scrollTo({top:0, behavior:'smooth'});
    });

    editButton.addEventListener('click', () => {
      result.classList.remove('visible');
      document.getElementById('quizForm').scrollIntoView({behavior:'smooth', block:'start'});
    });

    function getShareText() {
      return `Мой результат теста «Готов ли ты стать лидером группы?»: ${resultTitle.textContent} — ${scoreNumber.textContent}/90 баллов. ${verdict.textContent}`;
    }
    copyButton.addEventListener('click', async () => {
      const text = getShareText();
      try {
        await navigator.clipboard.writeText(text);
        copyButton.textContent = 'Скопировано ✓';
      } catch (error) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly','');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        const copied = document.execCommand('copy');
        textarea.remove();
        copyButton.textContent = copied ? 'Скопировано ✓' : 'Не удалось скопировать';
      }
      setTimeout(() => copyButton.textContent = 'Скопировать вердикт', 2200);
    });

    shareButton.addEventListener('click', async () => {
      const payload = {title:'Моя готовность стать лидером группы', text:getShareText()};
      if (navigator.share) {
        try { await navigator.share(payload); } catch (error) { /* Пользователь мог закрыть меню отправки. */ }
      } else {
        copyButton.click();
      }
    });

    document.getElementById('themeToggle').addEventListener('click', event => {
      const enabled = document.body.classList.toggle('light-theme');
      event.currentTarget.setAttribute('aria-pressed', String(enabled));
      event.currentTarget.textContent = enabled ? '🌙 Тёмная тема' : '☀️ Светлая тема';
    });

    document.getElementById('quoteRefresh').addEventListener('click', () => {
      const quote = document.getElementById('dailyQuote');
      const choices = quotes.filter(item => item !== quote.textContent);
      quote.textContent = choices[Math.floor(Math.random() * choices.length)];
    });

    document.getElementById('randomButton').addEventListener('click', () => {
      const missing = flatItems.map((_, index) => index).filter(index => !responses.has(index));
      const pool = missing.length ? missing : flatItems.map((_, index) => index);
      const index = pool[Math.floor(Math.random() * pool.length)];
      const card = document.getElementById(`question-${index}`);
      card.scrollIntoView({behavior:'smooth', block:'center'});
      card.animate([{transform:'scale(1)',borderColor:'var(--line)'},{transform:'scale(1.015)',borderColor:'var(--acid)'},{transform:'scale(1)',borderColor:'var(--line)'}], {duration:700});
    });

    document.getElementById('downloadButton').addEventListener('click', () => {
      const text = `${getShareText()}\n\nОТЧЁТ ПО ОТДЕЛАМ\n` + sections.map((section, sectionIndex) => {
        const start = sections.slice(0, sectionIndex).reduce((sum, current) => sum + current.items.length, 0);
        const score = section.items.reduce((sum, _, index) => sum + answers[responses.get(start + index)].score, 0);
        return `${section.title}: ${score}/${section.items.length * 3}`;
      }).join('\n') + '\n\nСформировано Отделом кадровой аномалии.';
      const blob = new Blob([text], {type:'text/plain;charset=utf-8'});
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a'); link.href = url; link.download = 'moj-otchet-lidera.txt'; link.click();
      URL.revokeObjectURL(url);
    });
    document.getElementById('printButton').addEventListener('click', () => window.print());

    function launchConfetti() {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduceMotion) return;
      const symbols = ['✦','●','◆','✧'];
      for (let i = 0; i < 42; i++) {
        const piece = document.createElement('span');
        piece.className = 'confetti';
        piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        piece.style.left = Math.random() * 100 + 'vw';
        piece.style.color = ['#d7ff48','#a796ff','#ff719b','#9ef0c2'][i % 4];
        piece.style.animationDelay = Math.random() * .7 + 's';
        piece.style.fontSize = (8 + Math.random() * 10) + 'px';
        document.body.appendChild(piece);
        piece.addEventListener('animationend', () => piece.remove(), {once:true});
      }
    }