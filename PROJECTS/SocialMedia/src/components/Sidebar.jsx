const Sidebar = () => {
  return (
    <div
      class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{ width: "280px" }}
    >
      {" "}
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        {" "}
        <svg class="bi pe-none me-2" width="40" height="32" aria-hidden="true">
          <use xlinkHref="#bootstrap"></use>
        </svg>{" "}
        <span class="fs-4">Sidebar</span>{" "}
      </a>{" "}
      <hr />{" "}
      <ul class="nav nav-pills flex-column mb-auto">
        {" "}
        <li class="nav-item">
          {" "}
          <a href="#" class="nav-link active" aria-current="page">
            {" "}
            <svg
              class="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>{" "}
        </li>{" "}
        <li>
          {" "}
          <a href="#" class="nav-link text-white">
            {" "}
            <svg
              class="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Post
          </a>{" "}
        </li>{" "}
      </ul>{" "}
      <hr />
      <div class="dropdown">
        <a
          href="#"
          class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {/* h1 updated */}
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            class="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
      </div>{" "}
    </div>
  );
};

export default Sidebar;
