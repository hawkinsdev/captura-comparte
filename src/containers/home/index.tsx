import React from "react";
import { SectionLoading } from "../../components/molecules/SectionLoading";
import { Home } from "../../components/pages/home";
import { get_all_photos } from "../../services/gallery";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { Publications } from "../../types/publications";
import { toast } from "react-toastify";

export const HomeC: React.FC = () => {
  const queryClient = useQueryClient();
  const {
    data = [],
    error,
    isLoading,
  } = useQuery<Publications>("publications", get_all_photos, {
    initialData: [],
  });

  const mutation = useMutation(async () => [], {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("publications");
    },
  });
  if (isLoading) return <SectionLoading className="size-8" />;
  if (error)
    return <>{toast.error("Ha ocurrido un error al cargar las fotos 😞")}</>;

  return <Home publications={data} />;
};
