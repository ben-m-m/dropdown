$(function () {
    const $items = $("main.alu_faq section.faq_item");

    function closeItem($item) {
        const $toggle = $item.find("button[aria-controls]").first();
        const panelId = $toggle.attr("aria-controls");
        const $panel = $("#" + panelId);

        $item.removeClass("is-open");
        $toggle.attr("aria-expanded", "false");
        $panel.prop("hidden", true);
    }

    function openItem($item) {
        const $toggle = $item.find("button[aria-controls]").first();
        const panelId = $toggle.attr("aria-controls");
        const $panel = $("#" + panelId);

        $item.addClass("is-open");
        $toggle.attr("aria-expanded", "true");
        $panel.prop("hidden", false);
    }

    $items.each(function () {
        const $item = $(this);
        const $toggle = $item.find("button[aria-controls]").first();
        const panelId = $toggle.attr("aria-controls");
        const $panel = $("#" + panelId);

        $panel.prop("hidden", true);

        $toggle.on("click", function () {
            const isOpen = $toggle.attr("aria-expanded") === "true";

            $items.each(function () {
                closeItem($(this));
            });

            if (!isOpen) {
                openItem($item);
            }
        });
    });

    if ($items.length > 0) {
        openItem($items.first());
    }
});