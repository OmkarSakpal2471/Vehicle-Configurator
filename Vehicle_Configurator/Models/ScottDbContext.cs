using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Vehicle_Configurator.DbRepos;

public partial class ScottDbContext : DbContext
{
    public ScottDbContext()
    {
    }

    public ScottDbContext(DbContextOptions<ScottDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<AlternateComponentMaster> AlternateComponentMasters { get; set; }

    public virtual DbSet<ComponentMaster> ComponentMasters { get; set; }

    public virtual DbSet<Invoice> Invoices { get; set; }


    public virtual DbSet<MfgMaster> MfgMasters { get; set; }

    public virtual DbSet<ModelMaster> ModelMasters { get; set; }

    public virtual DbSet<SegmentMaster> SegmentMasters { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<VehicleDetail> VehicleDetails { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)

    {
        if (!optionsBuilder.IsConfigured)
        {

            IConfigurationRoot configuration = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("Appsettings.json")
            .Build();
            optionsBuilder.UseMySQL("Server=localhost;Database=jwttest;user id=root;password=Omkar123");

        }
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<AlternateComponentMaster>(entity =>
        {
            entity.HasKey(e => e.AltId).HasName("PRIMARY");

            entity.ToTable("alternate_component_master");

            entity.Property(e => e.AltId).HasColumnName("alt_id");
            entity.Property(e => e.AltCompId).HasColumnName("alt_comp_id");
            entity.Property(e => e.CompId).HasColumnName("comp_id");
            entity.Property(e => e.DeltaPrice).HasColumnName("delta_price");
            entity.Property(e => e.MdlId).HasColumnName("mdl_id");
        });

        modelBuilder.Entity<ComponentMaster>(entity =>
        {
            entity.HasKey(e => e.CompId).HasName("PRIMARY");

            entity.ToTable("component_master");

            entity.Property(e => e.CompId).HasColumnName("comp_id");
            entity.Property(e => e.CompName)
                .HasMaxLength(255)
                .HasColumnName("comp_name");
            entity.Property(e => e.SubType)
                .HasMaxLength(255)
                .HasColumnName("sub_type");
        });

        modelBuilder.Entity<Invoice>(entity =>
        {
            entity.HasKey(e => e.InvId).HasName("PRIMARY");

            entity.ToTable("invoice");

            entity.Property(e => e.InvId).HasColumnName("inv_id");
            entity.Property(e => e.Date)
                .HasMaxLength(255)
                .HasColumnName("date");
            entity.Property(e => e.MdlId).HasColumnName("mdl_id");
            entity.Property(e => e.Quantity).HasColumnName("quantity");
            entity.Property(e => e.TotalPrice).HasColumnName("total_price");
            entity.Property(e => e.Username)
                .HasMaxLength(255)
                .HasColumnName("username");
        });

        

        modelBuilder.Entity<MfgMaster>(entity =>
        {
            entity.HasKey(e => e.MfgId).HasName("PRIMARY");

            entity.ToTable("mfg_master");

            entity.HasIndex(e => e.SegId, "FKok5qd64lq1asv75hpfgpwhdyq");

            entity.Property(e => e.MfgId).HasColumnName("mfg_id");
            entity.Property(e => e.MfgName)
                .HasMaxLength(255)
                .HasColumnName("mfg_name");
            entity.Property(e => e.SegId).HasColumnName("seg_id");

            entity.HasOne(d => d.Seg).WithMany(p => p.MfgMasters)
                .HasForeignKey(d => d.SegId)
                .HasConstraintName("FKok5qd64lq1asv75hpfgpwhdyq");
        });

        modelBuilder.Entity<ModelMaster>(entity =>
        {
            entity.HasKey(e => e.MdlId).HasName("PRIMARY");

            entity.ToTable("model_master");

            entity.HasIndex(e => e.MfgId, "FKacbx0rmpiqwgiisi06lsfcw6f");

            entity.HasIndex(e => e.SegId, "FKtpmev85psi1n73w058nmykixb");

            entity.Property(e => e.MdlId).HasColumnName("mdl_id");
            entity.Property(e => e.ImagePath)
                .HasMaxLength(255)
                .HasColumnName("image_path");
            entity.Property(e => e.MdlName)
                .HasMaxLength(255)
                .HasColumnName("mdl_name");
            entity.Property(e => e.MfgId).HasColumnName("mfg_id");
            entity.Property(e => e.Price).HasColumnName("price");
            entity.Property(e => e.SegId).HasColumnName("seg_id");

            entity.HasOne(d => d.Mfg).WithMany(p => p.ModelMasters)
                .HasForeignKey(d => d.MfgId)
                .HasConstraintName("FKacbx0rmpiqwgiisi06lsfcw6f");

            entity.HasOne(d => d.Seg).WithMany(p => p.ModelMasters)
                .HasForeignKey(d => d.SegId)
                .HasConstraintName("FKtpmev85psi1n73w058nmykixb");
        });

        modelBuilder.Entity<SegmentMaster>(entity =>
        {
            entity.HasKey(e => e.SegId).HasName("PRIMARY");

            entity.ToTable("segment_master");

            entity.Property(e => e.SegId).HasColumnName("seg_id");
            entity.Property(e => e.SegName)
                .HasMaxLength(255)
                .HasColumnName("seg_name");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("user");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .HasColumnName("address");
            entity.Property(e => e.AuthCell)
                .HasMaxLength(255)
                .HasColumnName("auth_cell");
            entity.Property(e => e.AuthTel)
                .HasMaxLength(255)
                .HasColumnName("auth_tel");
            entity.Property(e => e.CompName)
                .HasMaxLength(255)
                .HasColumnName("comp_name");
            entity.Property(e => e.CompStNo)
                .HasMaxLength(255)
                .HasColumnName("comp_st_no");
            entity.Property(e => e.Designation)
                .HasMaxLength(255)
                .HasColumnName("designation");
            entity.Property(e => e.Emailid)
                .HasMaxLength(255)
                .HasColumnName("emailid");
            entity.Property(e => e.Holding)
                .HasMaxLength(255)
                .HasColumnName("holding");
            entity.Property(e => e.NameAuthPerson)
                .HasMaxLength(255)
                .HasColumnName("name_auth_person");
            entity.Property(e => e.Pan)
                .HasMaxLength(255)
                .HasColumnName("pan");
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .HasColumnName("password");
            entity.Property(e => e.Telephone)
                .HasMaxLength(255)
                .HasColumnName("telephone");
            entity.Property(e => e.Username)
                .HasMaxLength(255)
                .HasColumnName("username");
            entity.Property(e => e.VatNo)
                .HasMaxLength(255)
                .HasColumnName("vat_no");
        });

        modelBuilder.Entity<VehicleDetail>(entity =>
        {
            entity.HasKey(e => e.ConfiId).HasName("PRIMARY");

            entity.ToTable("vehicle_detail");

            entity.HasIndex(e => e.MdlId, "FK7ef69m6cku8vfvvmxuvu4nys3");

            entity.HasIndex(e => e.CompId, "FKhih0q8yg3skwicdw9e0kigiti");

            entity.Property(e => e.ConfiId).HasColumnName("confi_id");
            entity.Property(e => e.CompId).HasColumnName("comp_id");
            entity.Property(e => e.CompType)
                .HasMaxLength(255)
                .HasColumnName("comp_type");
            entity.Property(e => e.IsConfigurable)
                .HasMaxLength(255)
                .HasColumnName("is_configurable");
            entity.Property(e => e.MdlId).HasColumnName("mdl_id");

            entity.HasOne(d => d.Comp).WithMany(p => p.VehicleDetails)
                .HasForeignKey(d => d.CompId)
                .HasConstraintName("FKhih0q8yg3skwicdw9e0kigiti");

            entity.HasOne(d => d.Mdl).WithMany(p => p.VehicleDetails)
                .HasForeignKey(d => d.MdlId)
                .HasConstraintName("FK7ef69m6cku8vfvvmxuvu4nys3");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
