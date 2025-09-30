export const UserRoleEnum = {
    ADMIN : "admin",
    PROJECT_ADMIN : "project_amdin",
    MEMBER: "member"
}

export const AvailableUserRole = Object.values(UserRoleEnum)

export const TaskStatusEnum = {
    TODO : "todo",
    IN_PROGRESS : "in_progress",
    DONE: "done"
}

export const AvailableTaskStatuses = Object.values(TaskStatusEnum)