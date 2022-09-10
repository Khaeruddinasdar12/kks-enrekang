<div id="kt_header" class="kt-header kt-grid__item  kt-header--fixed ">

  <div class="kt-header-menu-wrapper" id="kt_header_menu_wrapper">
    <div id="kt_header_menu" class="kt-header-menu kt-header-menu-mobile  kt-header-menu--layout-default ">
    </div>
  </div>

  <div class="kt-header__topbar">
    <div class="kt-header__topbar-item kt-header__topbar-item--user">
      <div class="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="0px,0px">
        <div class="kt-header__topbar-user">
          <span class="kt-header__topbar-username kt-hidden-mobile">
            <strong>{{ Auth::user()->name }}</strong>
          </span>
          <span class="kt-badge kt-badge--username kt-badge--unified-success kt-badge--lg kt-badge--rounded kt-badge--bold">
            <i class="flaticon-user"></i>
          </span>
        </div>
      </div>
      <div
        class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl">
        <div class="kt-user-card kt-user-card--skin-dark kt-notification-item-padding-x">
          <div class="kt-user-card__avatar">
            <span class="kt-badge kt-badge--username kt-badge--unified-success kt-badge--lg kt-badge--rounded kt-badge--bold">
              <i class="flaticon-user"></i>
            </span>
          </div>
          <div class="kt-user-card__name text-dark">
            <h5><strong>{{ Auth::user()->name }}</strong></h5>
          </div>
        </div>

        <div class="kt-notification">
          <div class="kt-notification__custom kt-space-between justify-content-center">
            <form id="logout-form" action="{{ route('logout') }}" method="POST">
              @csrf
              <button type="submit" class="btn btn-danger btn-md btn-bold" onclick="return confirm('Keluar dari admin panel ?');">Sign Out</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
