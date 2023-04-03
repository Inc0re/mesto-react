

function App() {
  return (
    <body class='page'>
      <div class='container'>
        <header class='header'>
          <a href='#' class='header__logo' />
        </header>
        <main class='content'>
          <section class='profile'>
            <div class='profile__avatar'>
              <button class='profile__avatar-edit' />
            </div>
            <div class='profile__info'>
              <h1 class='profile__name' />
              <button class='profile__edit-button' type='button' />
              <p class='profile__job' />
            </div>
            <button class='profile__add-button' type='button' />
          </section>
          <section>
            <ul class='elements' />
          </section>
        </main>
        <footer class='footer'>
          <p class='footer__copyright'>© 2023 Mesto Russia</p>
        </footer>
        <div class='popup' id='edit-profile'>
          <div class='popup__container'>
            <button class='popup__close' type='button' />
            <form
              action='#'
              class='edit-form'
              method='post'
              name='profile'
              novalidate
            >
              <h2 class='edit-form__title'>Редактировать профиль</h2>
              <div class='edit-form__wrapper'>
                <input
                  class='edit-form__field'
                  name='name'
                  type='text'
                  placeholder='Имя'
                  required
                  minlength='2'
                  maxlength='40'
                />
                <span class='edit-form__error' />
              </div>
              <div class='edit-form__wrapper'>
                <input
                  class='edit-form__field'
                  name='job'
                  type='text'
                  placeholder='Место работы'
                  required
                  minlength='2'
                  maxlength='200'
                />
                <span class='edit-form__error' />
              </div>
              <button class='edit-form__btn-save' type='submit'>
                Сохранить
              </button>
            </form>
          </div>
        </div>
        <div class='popup' id='add-place'>
          <div class='popup__container'>
            <button class='popup__close' type='button' />
            <form
              action='#'
              class='edit-form'
              method='post'
              name='add-place'
              novalidate
            >
              <h2 class='edit-form__title'>Новое место</h2>
              <div class='edit-form__wrapper'>
                <input
                  class='edit-form__field'
                  name='name'
                  type='text'
                  placeholder='Название'
                  required
                  minlength='2'
                  maxlength='30'
                />
                <span class='edit-form__error' />
              </div>
              <div class='edit-form__wrapper'>
                <input
                  class='edit-form__field'
                  name='link'
                  type='url'
                  placeholder='Ссылка на картинку'
                  required
                />
                <span class='edit-form__error' />
              </div>
              <button class='edit-form__btn-save' type='submit' disabled>
                Создать
              </button>
            </form>
          </div>
        </div>
        <div class='popup' id='edit-avatar'>
          <div class='popup__container'>
            <button class='popup__close' type='button' />
            <form
              action='#'
              class='edit-form'
              method='post'
              name='edit-avatar'
              novalidate
            >
              <h2 class='edit-form__title'>Обновить аватар</h2>
              <div class='edit-form__wrapper'>
                <input
                  class='edit-form__field'
                  name='link'
                  type='url'
                  placeholder='Ссылка на картинку'
                  required
                />
                <span class='edit-form__error' />
              </div>
              <button class='edit-form__btn-save' type='submit' disabled>
                Сохранить
              </button>
            </form>
          </div>
        </div>
        <div class='popup' id='confirm'>
          <div class='popup__container'>
            <button class='popup__close' type='button' />
            <form
              action='#'
              class='edit-form'
              method='post'
              name='add-place'
              novalidate
            >
              <h2 class='edit-form__title'>Вы уверены?</h2>
              <button
                class='edit-form__btn-save edit-form__btn-save_margin_low'
                type='submit'
              >
                Да
              </button>
            </form>
          </div>
        </div>
        <div class='popup popup_bg-opacity_90' id='picture-popup'>
          <figure class='popup__image-figure'>
            <button class='popup__close' type='button' />
            <img alt='' class='popup__image' />
            <figcaption class='popup__image-caption' />
          </figure>
        </div>
      </div>
      <template id='card'>
        <li class='element'>
          <button type='button' class='element__delete' />
          <img class='element__image' alt='' />
          <div class='element__control'>
            <h2 class='element__title' />
            <div class='element__like-wrapper'>
              <button type='button' class='element__like' />
              <p class='element__like-counter' />
            </div>
          </div>
        </li>
      </template>
    </body>
  );
}

export default App;
