export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      blog_posts: {
        Row: {
          content: string
          cover_image_url: string | null
          created_at: string
          excerpt: string | null
          gbp_posted: boolean | null
          id: string
          linkedin_post_text: string | null
          linkedin_posted: boolean | null
          published_at: string | null
          scheduled_at: string | null
          slug: string
          status: string
          tags: string[] | null
          title: string
          updated_at: string
        }
        Insert: {
          content: string
          cover_image_url?: string | null
          created_at?: string
          excerpt?: string | null
          gbp_posted?: boolean | null
          id?: string
          linkedin_post_text?: string | null
          linkedin_posted?: boolean | null
          published_at?: string | null
          scheduled_at?: string | null
          slug: string
          status?: string
          tags?: string[] | null
          title: string
          updated_at?: string
        }
        Update: {
          content?: string
          cover_image_url?: string | null
          created_at?: string
          excerpt?: string | null
          gbp_posted?: boolean | null
          id?: string
          linkedin_post_text?: string | null
          linkedin_posted?: boolean | null
          published_at?: string | null
          scheduled_at?: string | null
          slug?: string
          status?: string
          tags?: string[] | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      care_requests: {
        Row: {
          client_name: string
          created_at: string
          email: string | null
          id: string
          message: string
          phone: string
          request_type: string
        }
        Insert: {
          client_name: string
          created_at?: string
          email?: string | null
          id?: string
          message: string
          phone: string
          request_type: string
        }
        Update: {
          client_name?: string
          created_at?: string
          email?: string | null
          id?: string
          message?: string
          phone?: string
          request_type?: string
        }
        Relationships: []
      }
      caregiver_assignments: {
        Row: {
          assigned_at: string
          caregiver_id: string
          client_assessment_id: string
          created_at: string
          id: string
          introduction_sent: boolean
          introduction_sent_at: string | null
          notes: string | null
          status: string
          updated_at: string
        }
        Insert: {
          assigned_at?: string
          caregiver_id: string
          client_assessment_id: string
          created_at?: string
          id?: string
          introduction_sent?: boolean
          introduction_sent_at?: string | null
          notes?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          assigned_at?: string
          caregiver_id?: string
          client_assessment_id?: string
          created_at?: string
          id?: string
          introduction_sent?: boolean
          introduction_sent_at?: string | null
          notes?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "caregiver_assignments_caregiver_id_fkey"
            columns: ["caregiver_id"]
            isOneToOne: false
            referencedRelation: "caregivers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "caregiver_assignments_client_assessment_id_fkey"
            columns: ["client_assessment_id"]
            isOneToOne: false
            referencedRelation: "client_assessments"
            referencedColumns: ["id"]
          },
        ]
      }
      caregivers: {
        Row: {
          availability_schedule: Json | null
          bio: string | null
          certifications: string[] | null
          created_at: string
          email: string | null
          full_name: string
          gender: string | null
          hire_date: string | null
          id: string
          languages: string[] | null
          phone: string | null
          photo_url: string | null
          skills: string[] | null
          status: string
          updated_at: string
        }
        Insert: {
          availability_schedule?: Json | null
          bio?: string | null
          certifications?: string[] | null
          created_at?: string
          email?: string | null
          full_name: string
          gender?: string | null
          hire_date?: string | null
          id?: string
          languages?: string[] | null
          phone?: string | null
          photo_url?: string | null
          skills?: string[] | null
          status?: string
          updated_at?: string
        }
        Update: {
          availability_schedule?: Json | null
          bio?: string | null
          certifications?: string[] | null
          created_at?: string
          email?: string | null
          full_name?: string
          gender?: string | null
          hire_date?: string | null
          id?: string
          languages?: string[] | null
          phone?: string | null
          photo_url?: string | null
          skills?: string[] | null
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      client_assessments: {
        Row: {
          address: string | null
          ai_recommendation: string | null
          assessment_data: Json
          assigned_supervisor: string | null
          care_plan_approved_at: string | null
          care_plan_approved_by: string | null
          care_plan_draft: Json | null
          care_plan_status: string | null
          checklist_progress: Json | null
          client_name: string
          completed_at: string | null
          created_at: string
          date_of_birth: string | null
          email: string | null
          emailed_to: string | null
          emergency_contact: string | null
          emergency_phone: string | null
          estimated_weekly_cost: string | null
          id: string
          insurance_info: string | null
          payment_type: string | null
          phone: string
          recommended_hours: string | null
          recommended_package: string | null
          status: string
          triage_category: number | null
        }
        Insert: {
          address?: string | null
          ai_recommendation?: string | null
          assessment_data?: Json
          assigned_supervisor?: string | null
          care_plan_approved_at?: string | null
          care_plan_approved_by?: string | null
          care_plan_draft?: Json | null
          care_plan_status?: string | null
          checklist_progress?: Json | null
          client_name: string
          completed_at?: string | null
          created_at?: string
          date_of_birth?: string | null
          email?: string | null
          emailed_to?: string | null
          emergency_contact?: string | null
          emergency_phone?: string | null
          estimated_weekly_cost?: string | null
          id?: string
          insurance_info?: string | null
          payment_type?: string | null
          phone: string
          recommended_hours?: string | null
          recommended_package?: string | null
          status?: string
          triage_category?: number | null
        }
        Update: {
          address?: string | null
          ai_recommendation?: string | null
          assessment_data?: Json
          assigned_supervisor?: string | null
          care_plan_approved_at?: string | null
          care_plan_approved_by?: string | null
          care_plan_draft?: Json | null
          care_plan_status?: string | null
          checklist_progress?: Json | null
          client_name?: string
          completed_at?: string | null
          created_at?: string
          date_of_birth?: string | null
          email?: string | null
          emailed_to?: string | null
          emergency_contact?: string | null
          emergency_phone?: string | null
          estimated_weekly_cost?: string | null
          id?: string
          insurance_info?: string | null
          payment_type?: string | null
          phone?: string
          recommended_hours?: string | null
          recommended_package?: string | null
          status?: string
          triage_category?: number | null
        }
        Relationships: []
      }
      client_surveys: {
        Row: {
          caregiver_id: string
          client_assessment_id: string
          completed_at: string | null
          created_at: string
          id: string
          sent_at: string | null
          status: string
          survey_data: Json | null
          triggered_after_visit: number
        }
        Insert: {
          caregiver_id: string
          client_assessment_id: string
          completed_at?: string | null
          created_at?: string
          id?: string
          sent_at?: string | null
          status?: string
          survey_data?: Json | null
          triggered_after_visit?: number
        }
        Update: {
          caregiver_id?: string
          client_assessment_id?: string
          completed_at?: string | null
          created_at?: string
          id?: string
          sent_at?: string | null
          status?: string
          survey_data?: Json | null
          triggered_after_visit?: number
        }
        Relationships: [
          {
            foreignKeyName: "client_surveys_caregiver_id_fkey"
            columns: ["caregiver_id"]
            isOneToOne: false
            referencedRelation: "caregivers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_surveys_client_assessment_id_fkey"
            columns: ["client_assessment_id"]
            isOneToOne: false
            referencedRelation: "client_assessments"
            referencedColumns: ["id"]
          },
        ]
      }
      consultations: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          phone: string | null
          referral_source: string | null
          relationship: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          phone?: string | null
          referral_source?: string | null
          relationship?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string | null
          referral_source?: string | null
          relationship?: string | null
        }
        Relationships: []
      }
      job_applications: {
        Row: {
          created_at: string
          email: string
          experience: string | null
          full_name: string
          id: string
          message: string | null
          notes: string | null
          phone: string | null
          position: string
          referral_source: string | null
          resume_url: string | null
          status: string
        }
        Insert: {
          created_at?: string
          email: string
          experience?: string | null
          full_name: string
          id?: string
          message?: string | null
          notes?: string | null
          phone?: string | null
          position: string
          referral_source?: string | null
          resume_url?: string | null
          status?: string
        }
        Update: {
          created_at?: string
          email?: string
          experience?: string | null
          full_name?: string
          id?: string
          message?: string | null
          notes?: string | null
          phone?: string | null
          position?: string
          referral_source?: string | null
          resume_url?: string | null
          status?: string
        }
        Relationships: []
      }
      lead_magnet_downloads: {
        Row: {
          created_at: string
          email: string
          full_name: string
          guide_name: string
          id: string
          phone: string | null
        }
        Insert: {
          created_at?: string
          email: string
          full_name: string
          guide_name?: string
          id?: string
          phone?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          full_name?: string
          guide_name?: string
          id?: string
          phone?: string | null
        }
        Relationships: []
      }
      newsletter_subscribers: {
        Row: {
          created_at: string
          email: string
          full_name: string | null
          id: string
          subscribed: boolean
        }
        Insert: {
          created_at?: string
          email: string
          full_name?: string | null
          id?: string
          subscribed?: boolean
        }
        Update: {
          created_at?: string
          email?: string
          full_name?: string | null
          id?: string
          subscribed?: boolean
        }
        Relationships: []
      }
      reference_documents: {
        Row: {
          category: string
          content: string
          created_at: string
          id: string
          metadata: Json | null
          source: string | null
          tags: string[] | null
          title: string
          updated_at: string
        }
        Insert: {
          category?: string
          content: string
          created_at?: string
          id?: string
          metadata?: Json | null
          source?: string | null
          tags?: string[] | null
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          content?: string
          created_at?: string
          id?: string
          metadata?: Json | null
          source?: string | null
          tags?: string[] | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      seo_tasks: {
        Row: {
          completed_date: string | null
          created_at: string
          description: string | null
          id: string
          notes: string | null
          phase: string
          sort_order: number
          status: string
          target_date: string | null
          title: string
          updated_at: string
        }
        Insert: {
          completed_date?: string | null
          created_at?: string
          description?: string | null
          id?: string
          notes?: string | null
          phase?: string
          sort_order?: number
          status?: string
          target_date?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          completed_date?: string | null
          created_at?: string
          description?: string | null
          id?: string
          notes?: string | null
          phase?: string
          sort_order?: number
          status?: string
          target_date?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      social_posts: {
        Row: {
          caption: string
          created_at: string
          hashtags: string[] | null
          id: string
          linked_blog_id: string | null
          media_type: string | null
          media_url: string | null
          notes: string | null
          platform: string
          published_at: string | null
          scheduled_at: string | null
          status: string
          updated_at: string
        }
        Insert: {
          caption: string
          created_at?: string
          hashtags?: string[] | null
          id?: string
          linked_blog_id?: string | null
          media_type?: string | null
          media_url?: string | null
          notes?: string | null
          platform?: string
          published_at?: string | null
          scheduled_at?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          caption?: string
          created_at?: string
          hashtags?: string[] | null
          id?: string
          linked_blog_id?: string | null
          media_type?: string | null
          media_url?: string | null
          notes?: string | null
          platform?: string
          published_at?: string | null
          scheduled_at?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "social_posts_linked_blog_id_fkey"
            columns: ["linked_blog_id"]
            isOneToOne: false
            referencedRelation: "blog_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      supervisor_reminders: {
        Row: {
          client_assessment_id: string
          completed_at: string | null
          created_at: string
          due_date: string
          id: string
          reminder_type: string
          status: string
        }
        Insert: {
          client_assessment_id: string
          completed_at?: string | null
          created_at?: string
          due_date: string
          id?: string
          reminder_type?: string
          status?: string
        }
        Update: {
          client_assessment_id?: string
          completed_at?: string | null
          created_at?: string
          due_date?: string
          id?: string
          reminder_type?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "supervisor_reminders_client_assessment_id_fkey"
            columns: ["client_assessment_id"]
            isOneToOne: false
            referencedRelation: "client_assessments"
            referencedColumns: ["id"]
          },
        ]
      }
      supervisor_visits: {
        Row: {
          care_plan_followed: string
          caregiver_notes: string | null
          caregiver_observed: string
          client_assessment_id: string
          condition_change: boolean
          condition_change_notes: string | null
          created_at: string
          id: string
          recommend_plan_update: boolean
          supervisor_name: string
          visit_date: string
        }
        Insert: {
          care_plan_followed?: string
          caregiver_notes?: string | null
          caregiver_observed: string
          client_assessment_id: string
          condition_change?: boolean
          condition_change_notes?: string | null
          created_at?: string
          id?: string
          recommend_plan_update?: boolean
          supervisor_name: string
          visit_date: string
        }
        Update: {
          care_plan_followed?: string
          caregiver_notes?: string | null
          caregiver_observed?: string
          client_assessment_id?: string
          condition_change?: boolean
          condition_change_notes?: string | null
          created_at?: string
          id?: string
          recommend_plan_update?: boolean
          supervisor_name?: string
          visit_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "supervisor_visits_client_assessment_id_fkey"
            columns: ["client_assessment_id"]
            isOneToOne: false
            referencedRelation: "client_assessments"
            referencedColumns: ["id"]
          },
        ]
      }
      visit_logs: {
        Row: {
          assignment_id: string | null
          caregiver_id: string
          client_assessment_id: string
          clock_in: string | null
          clock_out: string | null
          created_at: string
          daily_notes: string | null
          id: string
          status: string
        }
        Insert: {
          assignment_id?: string | null
          caregiver_id: string
          client_assessment_id: string
          clock_in?: string | null
          clock_out?: string | null
          created_at?: string
          daily_notes?: string | null
          id?: string
          status?: string
        }
        Update: {
          assignment_id?: string | null
          caregiver_id?: string
          client_assessment_id?: string
          clock_in?: string | null
          clock_out?: string | null
          created_at?: string
          daily_notes?: string | null
          id?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "visit_logs_assignment_id_fkey"
            columns: ["assignment_id"]
            isOneToOne: false
            referencedRelation: "caregiver_assignments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "visit_logs_caregiver_id_fkey"
            columns: ["caregiver_id"]
            isOneToOne: false
            referencedRelation: "caregivers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "visit_logs_client_assessment_id_fkey"
            columns: ["client_assessment_id"]
            isOneToOne: false
            referencedRelation: "client_assessments"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
