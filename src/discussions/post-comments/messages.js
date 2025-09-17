import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  addComment: {
    id: 'discussions.comments.comment.addComment',
    defaultMessage: 'Thêm bình luận',
    description: 'Button to add a comment to a response',
  },
  addResponse: {
    id: 'discussions.comments.comment.addResponse',
    defaultMessage: 'Thêm phản hồi',
    description: 'Button to add a response to a response',
  },
  abuseFlaggedMessage: {
    id: 'discussions.comments.comment.abuseFlaggedMessage',
    defaultMessage: 'Nội dung đã được báo cáo để nhân viên xem xét',
    description: 'Alert banner over comment that has been reported for abuse',
  },
  backAlt: {
    id: 'discussions.actions.back.alt',
    defaultMessage: 'Quay lại danh sách',
    description: 'Back to Posts list button text',
  },
  responseCount: {
    id: 'discussions.comments.comment.responseCount',
    defaultMessage: `{num, plural,
      =0 {Không có phản hồi nào}
      one {Hiển thị # phản hồi}
      other {Hiển thị # phản hồi}
    }`,
  },
  endorsedResponseCount: {
    id: 'discussions.comments.comment.endorsedResponseCount',
    defaultMessage: `{num, plural,
      =0 {Không có phản hồi được xác nhận}
      one {Hiển thị # phản hồi được xác nhận}
      other {Hiển thị # phản hồi được xác nhận}
    }`,
  },
  loadMoreComments: {
    id: 'discussions.comments.comment.loadMoreComments',
    defaultMessage: 'Tải thêm bình luận',
    description: 'Button to load more comments on responses',
  },
  loadMoreResponses: {
    id: 'discussions.comments.comment.loadMoreResponses',
    defaultMessage: 'Tải thêm phản hồi',
    description: 'Button to load more responses of forum posts',
  },
  postVisibility: {
    id: 'discussions.comments.comment.visibility',
    defaultMessage: `Bài viết này hiển thị cho {group, select,
         null {Mọi người}
         other {{group}}
    }.`,
    description: 'Message on comment mentioning the group a particular post is visible to',
  },
  postTime: {
    id: 'discussions.comments.comment.postedTime',
    defaultMessage: `{postType, select,
      discussion {Thảo luận}
      question {Câu hỏi}
      other {{postType}}
    } đã đăng {relativeTime} bởi`,
    description: 'Timestamp for when a user posted the message followed by username. The relative time is already translated.',
  },
  commentTime: {
    id: 'discussions.comments.comment.commentTime',
    defaultMessage: 'Đã đăng {relativeTime}',
    description: 'Message about how long ago a comment was posted.',
  },
  answer: {
    id: 'discussions.comments.comment.answer',
    defaultMessage: 'Câu trả lời',
    description: 'Message above a comment that has been marked as the answer.',
  },
  answeredLabel: {
    id: 'discussions.comments.comment.answeredlabel',
    defaultMessage: 'Được đánh dấu là đã trả lời bởi',
    description: 'Message above a comment marked as answered.',
  },
  endorsed: {
    id: 'discussions.comments.comment.endorsed',
    defaultMessage: 'Được xác nhận',
    description: 'Message above a comment that has been endorsed.',
  },
  endorsedLabel: {
    id: 'discussions.comments.comment.endorsedlabel',
    defaultMessage: 'Được xác nhận bởi',
    description: 'Message above a comment that has been endorsed.',
  },
  actionsAlt: {
    id: 'discussions.actions.label',
    defaultMessage: 'Menu hành động',
    description: 'Button to see actions for a post or comment',
  },
  editAction: {
    id: 'discussions.actions.edit',
    defaultMessage: 'Chỉnh sửa',
    description: 'Action to edit a comment or post',
  },
  pinAction: {
    id: 'discussions.actions.pin',
    defaultMessage: 'Ghim',
    description: 'Action to pin a post',
  },
  deleteAction: {
    id: 'discussions.actions.delete',
    defaultMessage: 'Xóa',
    description: 'Action to delete a post or comment',
  },
  submit: {
    id: 'discussions.editor.submit',
    defaultMessage: 'Gửi',
    description: 'Button to submit a response or comment',
  },
  submitting: {
    id: 'discussions.editor.submitting',
    defaultMessage: 'Đang gửi',
  },
  cancel: {
    id: 'discussions.editor.cancel',
    defaultMessage: 'Hủy',
    description: 'Button to cancel posting a response or comment',
  },
  commentError: {
    id: 'discussions.editor.error.empty',
    defaultMessage: 'Nội dung bài viết không được để trống.',
    description: 'Error message displayed when post content is left empty',
  },
  deleteResponseTitle: {
    id: 'discussions.editor.delete.response.title',
    defaultMessage: 'Xóa phản hồi',
    description: 'Title of confirmation dialog shown when deleting a response',
  },
  deleteResponseDescription: {
    id: 'discussions.editor.delete.response.description',
    defaultMessage: 'Bạn có chắc muốn xóa vĩnh viễn phản hồi này?',
    description: 'Text displayed in confirmation dialog when deleting a response',
  },
  deleteCommentTitle: {
    id: 'discussions.editor.delete.comment.title',
    defaultMessage: 'Xóa bình luận',
    description: 'Title of confirmation dialog shown when deleting a comment',
  },
  deleteCommentDescription: {
    id: 'discussions.editor.delete.comment.description',
    defaultMessage: 'Bạn có chắc muốn xóa vĩnh viễn bình luận này?',
    description: 'Text displayed in confirmation dialog when deleting a comment',
  },
  deleteConfirmationDelete: {
    id: 'discussions.delete.confirmation.button.delete',
    defaultMessage: 'Xóa',
    description: 'Delete button shown on delete confirmation dialog',
  },
  reportResponseTitle: {
    id: 'discussions.editor.response.response.title',
    defaultMessage: 'Báo cáo nội dung không phù hợp?',
    description: 'Title of confirmation dialog shown when reporting a response',
  },
  reportResponseDescription: {
    id: 'discussions.editor.response.description',
    defaultMessage: 'Nhóm kiểm duyệt sẽ xem xét nội dung này và thực hiện hành động phù hợp.',
    description: 'Text displayed in confirmation dialog when reporting a response',
  },
  reportCommentTitle: {
    id: 'discussions.editor.report.comment.title',
    defaultMessage: 'Báo cáo nội dung không phù hợp?',
    description: 'Title of confirmation dialog shown when reporting a comment',
  },
  reportCommentDescription: {
    id: 'discussions.editor.report.comment.description',
    defaultMessage: 'Nhóm kiểm duyệt sẽ xem xét nội dung này và thực hiện hành động phù hợp.',
    description: 'Text displayed in confirmation dialog when reporting a comment',
  },
  editReasonCode: {
    id: 'discussions.editor.comments.editReasonCode',
    defaultMessage: 'Lý do chỉnh sửa',
    description: 'Label for field visible to moderators when editing another user\'s response',
  },
  editReasonCodeError: {
    id: 'discussions.editor.posts.editReasonCode.error',
    defaultMessage: 'Chọn lý do chỉnh sửa',
    description: 'Error when moderators submit without selecting a reason',
  },
  editedBy: {
    id: 'discussions.comment.comments.editedBy',
    defaultMessage: 'Được chỉnh sửa bởi',
    description: 'Text shown to indicate who edited a post',
  },
  fullStop: {
    id: 'discussions.comment.comments.fullStop',
    defaultMessage: '•',
    description: 'Fullstop shown between editor and reason',
  },
  reason: {
    id: 'discussions.comment.comments.reason',
    defaultMessage: 'Lý do',
    description: 'Text shown before the reason for editing',
  },
  closedBy: {
    id: 'discussions.post.closedBy',
    defaultMessage: 'Bài viết đã đóng bởi',
  },
  time: {
    id: 'discussion.comment.time',
    defaultMessage: 'Cách đây {time}',
    description: 'Time text for endorse banner',
  },
  noThreadFound: {
    id: 'discussion.thread.notFound',
    defaultMessage: 'Không tìm thấy chuỗi thảo luận',
    description: 'Message shown if the requested thread is not found',
  },
  commentSort: {
    id: 'discussions.comment.sortFilterStatus',
    defaultMessage: `{sort, select,
      false {Cũ nhất trước}
      true {Mới nhất trước}
      other {{sort}}
    }`,
    description: 'Sort message showing current sorting',
  },
});

export default messages;