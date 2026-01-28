import { useState } from "react";

export default function TaskCard({ task, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(
    task.description || "",
  );
  const [loading, setLoading] = useState(false);

  const handleToggleStatus = async () => {
    const newStatus = task.status === "completed" ? "pending" : "completed";
    setLoading(true);
    try {
      await onUpdate(task.id, { ...task, status: newStatus });
    } catch (error) {
      alert("Erro ao atualizar status");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Deseja realmente deletar esta tarefa?")) return;

    setLoading(true);
    try {
      await onDelete(task.id);
    } catch (error) {
      alert("Erro ao deletar tarefa");
      setLoading(false);
    }
  };

  const handleSaveEdit = async () => {
    if (!editTitle.trim()) {
      alert("O título não pode estar vazio");
      return;
    }

    setLoading(true);
    try {
      await onUpdate(task.id, {
        ...task,
        title: editTitle,
        description: editDescription,
      });
      setIsEditing(false);
    } catch (error) {
      alert("Erro ao atualizar tarefa");
    } finally {
      setLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setEditTitle(task.title);
    setEditDescription(task.description || "");
    setIsEditing(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (isEditing) {
    return (
      <div className="bg-white border-2 border-blue-300 rounded-lg p-4 shadow">
        <div className="space-y-3">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Título"
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            rows="2"
            placeholder="Descrição"
          />
          <div className="flex gap-2">
            <button
              onClick={handleSaveEdit}
              disabled={loading}
              className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition disabled:bg-green-300"
            >
              Salvar
            </button>
            <button
              onClick={handleCancelEdit}
              disabled={loading}
              className="flex-1 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-white rounded-lg p-4 shadow hover:shadow-md transition ${
        task.status === "completed" ? "opacity-75" : ""
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3
            className={`text-lg font-semibold text-gray-800 ${
              task.status === "completed" ? "line-through text-gray-500" : ""
            }`}
          >
            {task.title}
          </h3>
          {task.description && (
            <p className="text-gray-600 mt-1 text-sm">{task.description}</p>
          )}
          <div className="flex items-center mt-3 space-x-4">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                task.status === "completed"
                  ? "bg-green-100 text-green-800"
                  : task.status === "in_progress"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-gray-100 text-gray-800"
              }`}
            >
              {task.status === "completed"
                ? "✓ Concluída"
                : task.status === "in_progress"
                  ? "⏳ Em Andamento"
                  : "○ Pendente"}
            </span>
            <span className="text-xs text-gray-500">
              {formatDate(task.createdAt)}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2 ml-4">
          <button
            onClick={handleToggleStatus}
            disabled={loading}
            className={`p-2 rounded-lg transition ${
              task.status === "completed"
                ? "bg-yellow-100 hover:bg-yellow-200 text-yellow-700"
                : "bg-green-100 hover:bg-green-200 text-green-700"
            } disabled:opacity-50`}
            title={task.status === "completed" ? "Reabrir" : "Concluir"}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {task.status === "completed" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              )}
            </svg>
          </button>

          <button
            onClick={() => setIsEditing(true)}
            disabled={loading}
            className="p-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition disabled:opacity-50"
            title="Editar"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>

          <button
            onClick={handleDelete}
            disabled={loading}
            className="p-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition disabled:opacity-50"
            title="Deletar"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
