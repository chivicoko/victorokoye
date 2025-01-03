// import { Product } from '@/utils/types';
import { ProjectProps2 } from '@/utils/types';
import axios from 'axios';
// import { revalidatePath } from 'next/cache';

const API_URL = '/api/projects';

export const getProjects = async () => {
  const response = await axios.get(`${API_URL}`);
//   console.log(response.data);
  return response.data;
};

export const getProjectById = async (id: string | string[]) => {
    try {
    const response = await axios.get(`${API_URL}/${id}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching project by ID:', error);
    throw error;
  }
};

// Adjust createProject to accept Omit<ProjectProps2, 'id'>
export const createProject = async (ProjectData: Omit<ProjectProps2, 'id'>) => {
  try {
    const response = await axios.post(`${API_URL}`, ProjectData);
    return response.data;
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
};

// No change needed for updateProject since it expects the id.
export const updateProject = async (id: string, ProjectData: ProjectProps2) => {
  const response = await axios.put(`${API_URL}/${id}`, ProjectData);
  return response.data;
};

export const deleteProject = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to delete project:', error);
    throw error;
  }
};
