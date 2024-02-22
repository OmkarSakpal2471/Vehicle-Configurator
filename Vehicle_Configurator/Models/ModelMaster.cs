using System;
using System.Collections.Generic;

namespace Vehicle_Configurator.DbRepos;

public partial class ModelMaster
{
    public int MdlId { get; set; }

    public string? ImagePath { get; set; }

    public string? MdlName { get; set; }

    public double Price { get; set; }

    public int? MfgId { get; set; }

    public int? SegId { get; set; }

    public virtual MfgMaster? Mfg { get; set; }

    public virtual SegmentMaster? Seg { get; set; }

    public virtual ICollection<VehicleDetail> VehicleDetails { get; } = new List<VehicleDetail>();
}
