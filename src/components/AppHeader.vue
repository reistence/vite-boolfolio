<script>
export default {
  name: "AppHeader",
  data() {
    return {
      headerLinks: [
       {
          name: "Home",
          routeName: "/",
          active: false,
        },
        {
          name: "Projects",
          routeName: "projects",
          active: false,
        },
        {
          name: "About",
          routeName: "about",
          active: false,
        },
        

      ],
      hamMenu: false,
    };
  },
  methods: {
    showHamMenu() {
      this.hamMenu = !this.hamMenu;
    },
  },
};
</script>

<template>
  <header>
    <div class="header-container">
      <div class="logo"><router-link :to="headerLinks[0].routeName">Boolfolio</router-link></div>
      <div @click="showHamMenu" class="ham-menu">
        <i class="fa-solid fa-bars"></i>

        <ul class="menu" :class="hamMenu === true ? 'active' : ''">
          <li
            class="menu-item"
            :class="{ active: link.active }"
            v-for="(link, index) in headerLinks"
            :key="index"
          >
            <router-link :to="link.routeName">{{ link.name }}</router-link>
          </li>
        </ul>
      </div>
      <ul>
        <li
          class="header-item"
          :class="{ active: link.active }"
          v-for="(link, index) in headerLinks"
        >
        <router-link :to="link.routeName">{{ link.name }}</router-link>
        </li>
        <li class="header-item">
                        <a class="nav-link" href="http://127.0.0.1:8000/admin">Login</a>
                    </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/_mixins" as *;
@use "../styles/partials/_variables" as *;

header {
  width: 100%;
  height: 100px;
  background-color: rgb(21, 20, 20);
  margin-bottom: 2em;
  // box-shadow: 1px 1px 10px black;
  .header-container {

    height: 100%;
    @include my-container;
    @include my-flex(row, space-between);
    .logo {
      font-size: 2rem;
      font-weight: 800;
      color: $red;
    }
    .ham-menu {
      display: none;
      position: relative;
      z-index: 999;
    }
    ul {
      height: 100%;
      @include my-flex(row, space-around);
      gap: 1em;
      width: 60%;
      color: $grey;

      .header-item {
        font-size: 1rem;
        font-weight: bold;
        line-height: 100px;
        position: relative;

        &.active {
          color: $red;

          &::after {
            content: "";
            position: absolute;
            bottom: 0%;
            left: 0;
            height: 5px;
            width: 100%;
            background-color: $red;
          }
        }
        &:hover {
          color: $red;
          transition: all 300ms ease;

          &::after {
            content: "";
            position: absolute;
            bottom: 0%;
            left: 0;
            height: 5px;
            width: 100%;
            background-color: $red;
            animation: height 300ms ease;
          }
          @keyframes height {
            0% {
              height: 0px;
            }
            50% {
              height: 3px;
            }
            100% {
              height: 5px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 880px) {
  header {
    .header-container {
      .ham-menu {
        display: block;

        i {
          color: $red;
          cursor: pointer;
          font-size: 2rem;
        }

        .menu {
          display: none;
          border-radius: 3px;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          background-color: $red;
          height: 270px;
          gap: 0.5em;
          width: 120px;
          color: $black;
          padding: 1em;
          position: absolute;
          top: 23px;
          left: -105px;

          &.active {
            display: flex;
          }
          .menu-item {
            line-height: normal;
            font-size: 0.8rem;
            font-weight: bold;
            transition:  all 300ms;
            margin-bottom: 1em;
            padding: .3em;

            &:hover {
              border-left: 5px solid black;
              transition: all 200ms;
            }
          }
        }
      }
      ul {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 480px) {
  header {
    .header-container {
      .ham-menu {
        display: block;

        .menu {
          display: none;
          border-radius: 10px;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          background-color: $red;
          height: 270px;
          gap: 0.5em;
          width: 120px;
          color: white;
          padding: 1em;
          position: absolute;
          top: 23px;
          left: -105px;

          &.active {
            display: flex;
          }
          .menu-item {
            line-height: normal;
            font-size: 0.8rem;
            font-weight: bold;
            transition: 300ms;

            &:hover {
              color: black;
            }
          }
        }
      }
      ul {
        display: none;
      }
    }
  }
}
</style>
