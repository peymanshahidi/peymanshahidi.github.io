$(document).ready(function () {
  // add toggle functionality to abstract, award and bibtex buttons
  $("a.abstract").click(function () {
    $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.award").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });

  // Custom lightbox for publication preview images
  $(".preview-zoomable").css("cursor", "zoom-in").on("click", function () {
    var src = $(this).attr("src");
    var bgColor =
      getComputedStyle(document.documentElement).getPropertyValue(
        "--global-bg-color",
      ) + "ee";
    var $overlay = $(
      '<div class="preview-lightbox-overlay" style="' +
        "position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;" +
        "display:flex;align-items:center;justify-content:center;" +
        "background:" +
        bgColor +
        ";cursor:zoom-out;" +
        '"></div>',
    );
    var $img = $(
      '<img src="' +
        src +
        "?fullres\" style=\"max-width:90vw;max-height:90vh;" +
        'object-fit:contain;border-radius:4px;box-shadow:0 4px 24px rgba(0,0,0,0.3);">',
    );
    $overlay.append($img);
    $("body").append($overlay);
    $overlay.on("click", function () {
      $overlay.remove();
    });
    $(document).on("keyup.previewLightbox", function (e) {
      if (e.key === "Escape") {
        $overlay.remove();
        $(document).off("keyup.previewLightbox");
      }
    });
  });
});
