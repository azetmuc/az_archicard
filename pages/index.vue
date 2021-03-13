<template>
  <div class="my-4 px-4 container mx-auto text-black">
    <section>
      <div class="flex justify-between">
        <div
          class="text-xs text-gray-400 flex justify-between items-center pr-4"
        >
          <TSvg name="medal" />
          <div>Авторизованный учебный центр GRAPHISOFT Россия</div>
        </div>
        <a
          href="https://calendly.com/az-studio/support30min"
          class="py-2 px-4 text-center font-bold border border-primary hover:bg-primary-light"
          >Заказать консультацию</a
        >
      </div>
      <div class="mt-4 md:mt-48 md:flex justify-between flex-row-reverse">
        <div class="ml-0 md:ml-4">
          <img src="/cover.jpg" alt="3д модель из Archicad" />
        </div>
        <div class="md:w-1/2">
          <h1 class="text-4xl md:text-5xl font-bold leading-none mt-4 md:mt-0">
            Archicad от А до Я
          </h1>
          <p class="text-4xl leading-none">доступно и живо</p>
          <p class="mt-4 text-lg">
            онлайн-курс по мастерству Archicad 24 от базовых инструментов до
            интеллигентных BIM-решений
          </p>
          <ul class="list-star pl-6 mt-2">
            <li>Мгновенный доступ к 22 урокам</li>
            <li>Практические задания после каждого урока</li>
            <li>Поддержка ментора</li>
            <li>Полезные знакомства – доступ в чаты курса и выпускников</li>
          </ul>
        </div>
      </div>
      <div class="mt-4">
        <button
          class="py-2 px-4 text-2xl font-bold bg-primary border border-primary hover:bg-primary-light"
        >
          Начать учиться
        </button>
      </div>
    </section>
    <section class="mt-12">
      <h2 class="bg-brush text-4xl font-bold text-center my-4 py-4">
        22 урока
      </h2>
      <div class="md:flex justify-between border">
        <div class="w-full">
          <div class="aspect-ratio">
            <iframe
              src="https://player.vimeo.com/video/238717446?title=0&byline=0&portrait=0"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="md:w-1/4">
          <div
            v-for="(item, index) in lessons"
            :key="index"
            class="flex justify-between p-4 hover:bg-primary-light border-b cursor-pointer"
            :class="{ 'bg-primary': index === activeLesson }"
            @click="activeLesson = index"
          >
            <div>
              <div class="text-sm font-bold leading-tight">
                {{ index + 1 }}. {{ item.name }}
              </div>
              <div class="text-gray-600 text-xs">{{ item.duration }} мин</div>
            </div>
            <div class="w-4">
              <TSvg v-if="item.locked" name="lock" />
              <TSvg v-else name="unchecked" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-12">
      <h2 class="bg-brush text-4xl font-bold text-center my-4 py-4">
        С чего начать?
      </h2>
      <div class="md:mx-32">
        <div v-for="(item, index) in faq" :key="index" class="shadow mb-1">
          <div class="flex justify-between cursor-pointer">
            <h3 class="text-2xl font-bold p-4">{{ item.question }}</h3>
            <div>
              <TSvg name="right" class="mt-2 mr-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-12">
      <h2 class="bg-brush text-4xl font-bold text-center my-4 py-4">Тарифы</h2>
      <div class="md:mt-40 md:mx-32 p-4 shadow-xl md:flex">
        <div class="p-6">
          <div class="text-4xl font-bold leading-tight">8 тыс. руб.</div>
          <div class="text-2xl font-bold">Самостоятельный</div>
          <ul class="pl-4 list-excluded text-gray-400 p-4 pb-0">
            <li>Поддержка ментора</li>
            <li>Проверка отчетов ментором</li>
          </ul>
          <ul class="pl-4 list-check p-4 pt-0">
            <li>Проверка финального задания ментором</li>
            <li>Доступ к курсу 2 месяца</li>
          </ul>
          <div class="flex justify-center">
            <button
              class="bg-primary hover:bg-primary-light border border-primary font-bold p-2"
            >
              Выбрать
            </button>
          </div>
        </div>
        <div class="border border-primary p-6 shadow-xl md:-mt-32">
          <div
            class="bg-primary text-xs uppercase p-2 text-center -mx-6 -mt-6 mb-4"
          >
            Рекомендуемый
          </div>
          <div class="text-4xl font-bold leading-tight">14 тыс. руб.</div>
          <div class="text-2xl font-bold">Оптимальный</div>
          <ul class="pl-6 list-check p-4">
            <li>Поддержка ментора 3 месяца</li>
            <li>Проверка отчетов ментором</li>
            <li>Проверка финального задания ментором</li>
            <li>Доступ к курсу неограниченный</li>
          </ul>
          <div class="flex justify-center">
            <button
              class="bg-primary hover:bg-primary-light border border-primary font-bold p-2"
            >
              Выбрать
            </button>
          </div>
        </div>
        <div class="p-6">
          <div class="text-4xl font-bold leading-tight">20 тыс. руб.</div>
          <div class="text-2xl font-bold">Углубленный</div>
          <ul class="pl-4 list-check p-4 pb-0">
            <li>Поддержки ментора 4 месяца</li>
            <li>Проверка отчетов ментором</li>
            <li>Проверка финального задания ментором</li>
            <li>Доступ к курсу неограниченный</li>
          </ul>
          <ul class="pl-4 list-star p-4 pt-0">
            <li class="font-bold">Две часовые онлайн-поддержки в месяц</li>
            <li class="font-bold">Разбор финального задания</li>
          </ul>
          <div class="flex justify-center">
            <button
              class="bg-primary hover:bg-primary-light border border-primary font-bold p-2"
            >
              Выбрать
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-12">
      <h2 class="bg-brush text-4xl font-bold text-center my-4 py-4">
        Мнения студентов
      </h2>
      <div class="mt-8">
        <div class="md:mx-16 flex justify-between">
          <a href="#" title="Предыдущий отзыв">
            <TSvg name="prev" />
          </a>
          <a href="#" title="Следующий отзыв">
            <TSvg name="next" />
          </a>
        </div>
        <div class="md:mx-32 md:-mt-16 shadow-xl p-4">
          <blockquote class="quote p-4">
            Добрый день! Я закончила базовый курс - Основы Archicad "Создание
            коммерческих проектов в Archicad". Очень понравился мне этот курс.
            Благодаря этому курсу, мне действительно удалось хорошо освоить
            программу Archicad, до это у меня были лишь только поверхностные
            знания. Отельная благодарность куратору Алексею Зиновьеву за его
            позитивную поддержку и оперативные ответы на мои вопросы. Обучением
            я осталась довольна. Большое Спасибо Вам!!!
          </blockquote>
          <div class="ml-4 flex items-center">
            <div class="w-12">
              <img
                src="/reviews/tarasova.jpg"
                alt="Мария Тарасова"
                class="rounded-full w-12 h-12"
              />
            </div>
            <div class="font-bold ml-2">Мария Тарасова</div>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-12">
      <h2 class="bg-brush text-4xl font-bold text-center my-4 py-4">
        Слово ментору
      </h2>
      <div class="md:flex justify-between">
        <div class="prose mx-auto">
          <p id="6cb7be5a-eed3-4699-8f4c-100f81732ce6" class="">
            С вами Алексей!
          </p>
          <p id="4f132199-4ae2-4b84-937d-577dae8cffcd" class="">
            Наверное, многие сталкивались с порой непростой ситуацией, когда
            нужно себя как-то идентифицировать… представиться… поставить вокруг
            какие-то обозначающие тебя рамки?
          </p>
          <p id="4077ab17-b171-4c9c-89d0-b6fa170fce03" class="">
            На сегодняшний день кроме моей профессии АРХИТЕКТОР меня
            характеризуют три главные СТРАСТИ последних месяцев-лет: Йога!
            Сёрфинг! и Сальса! Ну и то, что уже много лет сопровождает меня как
            в профессиональной, так и около профессиональной жизни - вирус под
            названием ARCHICAD!
          </p>
          <p id="4d2e8ef9-4b98-4a55-bcf4-6bc7aefa6e77" class="">
            Наши “отношения” с ARCHICAD хоть и начались почти 10 лет назад, но
            предпосылки к заражению этим явлением зарождались в виде таких
            увлечений как макетирование, 3D-моделирование, визуализация… ну и ко
            всему этому тайная страсть и желание передавать знания!
          </p>
          <p id="09e5e349-35f7-49e4-9096-62b4ba1a1921" class="">
            На пути к сегодняшнему Я встали:
          </p>
          <ul id="b554e319-2783-41f2-aa6b-53481f1f5361">
            <li>русское и немецкое высшее образование,</li>
            <li>
              опыт работы для Zara, Swarovski, H&amp;M, FC Bayern, Hirmer, BMW в
              Rhino, ARCHICAD, Revit, Microstation, а также множество других
              взлетов и падений как у каждого из нас.
            </li>
          </ul>
          <p id="52bd5366-a2fe-4adf-a896-ea8a8fc93ce3" class="">
            Вся эта “сборная солянка” привела меня к тому, что на сегодняшний
            день я занимаюсь преподаванием ARCHICAD и связанных с ним
            BIM-процессов - порядка трех лет онлайн и порядка двух лет вживую в
            GRAPHISOFT CENTER в Мюнхене.
          </p>
          <p id="4f9bc4e6-2b70-46b7-b1db-c75fd13a2a48" class="">
            Желание разбавить всю эту “солянку” каплей творчества и свободой
            самовыражения и привела нас с вами к этому, я надеюсь, приятном и
            теплому знакомству.
          </p>
          <p id="d3780f39-8486-41b9-a319-fc453ac6de2b" class="">
            Делюсь лайфхаками и отвечаю на вопросы подписчиков на инстаграмме –
            подписывайся, будет интересно!
          </p>
        </div>
        <div class="ml-0 md:ml-4 mt-4 md:mt-0">
          <img src="/mentor.jpg" alt="Алексей Зиновьев с доской для сёрфинга" />
        </div>
      </div>
    </section>
    <section class="mt-12 pb-12">
      <h2 class="bg-brush text-4xl font-bold text-center my-4 py-4">
        В подарок
      </h2>
      <div class="mt-4 md:w-1/2 mx-auto text-center flex flex-col items-center">
        <div>
          Доставляю интересные советы и приглашения на бесплатные
          онлайн-марафоны прямо на вашу почту
        </div>
        <form class="flex mt-2">
          <input
            placeholder="Ваш e-mail"
            type="text"
            class="border border-primary p-2"
          />
          <button
            type="submit"
            class="bg-primary hover:bg-primary-light border border-primary font-bold p-2"
          >
            Подписаться
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    activeLesson: 0,
    lessons: [
      {
        name: 'Описание курса',
        duration: 3,
      },
      {
        name: 'Возможности программы',
        duration: 7,
      },
      {
        name: 'Запуск Archicad',
        duration: 9,
        locked: true,
      },
      {
        name: 'Знакомство с интерфейсом программы',
        duration: 27,
        locked: true,
      },
      {
        name: 'Первые шаги. Основы построения',
        duration: 17,
        locked: true,
      },
      {
        name: 'Настройки инструментов',
        duration: 23,
        locked: true,
      },
    ],
    faq: [
      {
        question: 'Что такое Archicad?',
        answer: '',
      },
      {
        question: 'Чем Archicad лучше других программ?',
        answer: '',
      },
      {
        question: 'На кого рассчитан этот курс?',
        answer: '',
      },
      {
        question: 'Чем этот курс лучше бесплатных YouTube видео?',
        answer: '',
      },
    ],
  }),
}
</script>
