
export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  type?: 'text' | 'image' | 'data';
  imageUrl?: string;
  data?: any;
}

export interface ChatThread {
  id: string;
  title: string;
  messages: Message[];
  lastUpdated: number;
  roomId?: string;
}

export interface CommunityPost {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  roomId: string;
  title: string;
  content: string;
  imageUrl?: string;
  timestamp: number;
  upvotes: number;
  tags: string[];
}

export interface GroundingSource {
  title: string;
  uri: string;
}

export enum AppTab {
  CHAT = 'chat',
  LAB = 'lab',
  DISCOVERY = 'discovery',
  VOICE = 'voice'
}

export interface LabVisualization {
  labels: string[];
  values: number[];
  title: string;
}

export interface ScienceRoom {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  glowColor: string;
  expertPersona: string;
  hints: string[];
}

export const SCIENCE_ROOMS: ScienceRoom[] = [
  {
    id: 'general',
    name: 'General Science',
    description: 'Explore broad topics across all scientific disciplines.',
    icon: '💡',
    color: 'from-gray-500 to-slate-600',
    glowColor: 'rgba(100, 116, 139, 0.2)',
    expertPersona: 'You are Beni, a knowledgeable science communicator, capable of discussing a wide range of scientific topics.',
    hints: ['Scientific method', 'History of Science', 'Interdisciplinary Studies']
  },
  {
    id: 'physics',
    name: 'Physics Lab',
    description: 'Quantum mechanics, relativity, and the laws of the universe.',
    icon: '⚛️',
    color: 'from-blue-600 to-indigo-700',
    glowColor: 'rgba(59, 130, 246, 0.2)',
    expertPersona: 'You are Beni, an expert Theoretical Physicist. You explain concepts using mathematical beauty, energy levels, and spacetime analogies.',
    hints: ['Explain Entanglement', 'Schrödinger\'s Cat', 'Dark Matter']
  },
  {
    id: 'chemistry',
    name: 'Chemistry Lab',
    description: 'Molecular structures, chemical reactions, and periodic wonders.',
    icon: '🧪',
    color: 'from-rose-500 to-pink-700',
    glowColor: 'rgba(244, 63, 94, 0.2)',
    expertPersona: 'You are Beni, a master Chemist. You explain things in terms of molecular bonds, reaction kinetics, and stoichiometry.',
    hints: ['Noble gases reactivity', 'Stoichiometry basics', 'Organic synthesis']
  },
  {
    id: 'biology',
    name: 'Bio-Center',
    description: 'CRISPR, genetics, and the blueprints of life.',
    icon: '🧬',
    color: 'from-emerald-600 to-teal-700',
    glowColor: 'rgba(16, 185, 129, 0.2)',
    expertPersona: 'You are Beni, a world-class Molecular Biologist. You focus on genetic pathways, evolution, and cellular mechanisms.',
    hints: ['How CRISPR works', 'DNA Storage', 'Synthetic Biology']
  },
  {
    id: 'cosmos',
    name: 'Cosmos Explorer',
    description: 'Black holes, exoplanets, and deep space research.',
    icon: '🚀',
    color: 'from-purple-600 to-fuchsia-700',
    glowColor: 'rgba(168, 85, 247, 0.2)',
    expertPersona: 'You are Beni, an Astrophysicist and Space Explorer. You explain the vastness of the universe and stellar phenomena.',
    hints: ['Event Horizons', 'James Webb findings', 'Mars colonization']
  },
  {
    id: 'tech',
    name: 'Circuit City',
    description: 'Robotics, AI, and futuristic hardware.',
    icon: '🤖',
    color: 'from-amber-500 to-orange-600',
    glowColor: 'rgba(245, 158, 11, 0.2)',
    expertPersona: 'You are Beni, a visionary Systems Engineer. You focus on computational logic, hardware architecture, and the future of AI.',
    hints: ['Neural Networks', 'Quantum Computing', 'Edge AI']
  }
];
