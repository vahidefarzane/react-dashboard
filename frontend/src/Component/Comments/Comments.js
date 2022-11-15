import React, { useState, useEffect } from "react";
import Errorbox from "../Errorbox/Errorbox";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";

export default function Comments() {
  const [allComments, setAllComments] = useState([]);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [commentID, setCommentID] = useState(null);
  const [mainCommentBody, setMainCommentBody] = useState("");
  const closeDeleteModal = () => setIsShowDeleteModal(false);
  const closeDetailsModal = () => setIsShowDetailsModal(false);
  const closeModalDetails = () => setIsShowDetailsModal(false);

  useEffect(() => {
    getAllComments();
  }, []);

  const getAllComments = () => {
    fetch("http://localhost:8000/api/comments/")
      .then((res) => res.json())
      .then((comments) => setAllComments(comments));
  };
  const deleteComment = () => {
    fetch(`http://localhost:8000/api/comments/${commentID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        setIsShowDeleteModal(false);
        getAllComments();
      });
  };
  return (
    <div className="container">
      {allComments.length ? (
        <table>
          <thead>
            <tr className="table-heading-row">
              <th>اسم کاربر</th>
              <th>محصول</th>
              <th>متن کامنت</th>
              <th>زمان</th>
            </tr>
          </thead>
          <tbody>
            {allComments.map((comment) => (
              <tr key={comment.id} className="table-body-row">
                <td>{comment.userID}</td>
                <td>{comment.productID}</td>
                <td>
                  <button
                    className="table-btns"
                    onClick={() => {
                      setMainCommentBody(comment.body);
                      setIsShowDetailsModal(true);
                    }}
                  >
                    متن کامنت
                  </button>
                </td>
                <td>
                  {comment.hour} -{comment.date}
                </td>
                <td>
                  <button
                    className="table-btns"
                    onClick={() => {
                      setIsShowDeleteModal(true);
                      setCommentID(comment.id);
                    }}
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Errorbox massage="هیچ کامنتی یافت نشد" />
      )}
      {isShowDetailsModal && (
        <DetailsModal onHide={closeDetailsModal}>
          <div className="details-modal-container">
            <div className="details-modal">
              <p className="text-modal">{mainCommentBody}</p>
            </div>
            <button
              className="details-close-btn"
              onClick={() => closeModalDetails()}
            >
              بستن
            </button>
          </div>
        </DetailsModal>
      )}
      {isShowDeleteModal && (
        <DeleteModal
          title="آیا از حذف اطمینان دارید؟"
          cancelAction={closeDeleteModal}
          submitAction={deleteComment}
        />
      )}
    </div>
  );
}
