$(function (e) {
  $("#superrole-list").DataTable({
    order: [[2, "asc"]],
    rowGroup: { dataSrc: [2] },
    columnDefs: [
      { orderable: !1, targets: [0] },
      { targets: [2], visible: !1 },
    ],
    language: { searchPlaceholder: "Search...", sSearch: "" },
  })
  ,
    $(".select2").select2({ minimumResultsForSearch: 1 / 0 }),
    $(".role").on("click", function (e) {
      swal({
        title: "Aresfdfd you sure?",
        text: "Once deleted, you will not be able to recover this file!",
        icon: "warning",
        buttons: !0,
        dangerMode: !0,
      }).then(function (e) {
        e
          ? swal({
              title: "Success",
              text: "Successfully Updated",
              icon: "success",
            })
          : swal("Your  file is safe!");
      });
    });
});
